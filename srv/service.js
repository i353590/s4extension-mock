

module.exports = async srv => {
  const {BusinessPartnerAddress, Notification, Address, BusinessPartner} = srv.entities;
  const bupaSrv = await cds.connect.to("API_BUSINESS_PARTNER");

  srv.on("READ", BusinessPartnerAddress, req => bupaSrv.tx(req).run(req.query))
  srv.on("READ", BusinessPartner, req => bupaSrv.tx(req).run(req.query))

  bupaSrv.on("BusinessPartner/Created", async msg => {
    console.log("<< event caught", msg);
    const BUSINESSPARTNER = (+(msg.data.KEY[0].BUSINESSPARTNER)).toString();
    // ID has prefix 000 needs to be removed to read address
    console.log(BUSINESSPARTNER);
    const bpEntity = await bupaSrv.tx(msg).run(SELECT.one(BusinessPartner).where({businessPartnerId: BUSINESSPARTNER}));
    const result = await cds.tx(msg).run(INSERT.into(Notification).entries({businessPartnerId:BUSINESSPARTNER.toString(), verificationStatus_code:'N', businessPartnerName:bpEntity.businessPartnerName}))
    if(result != 1) return
    const address = await bupaSrv.tx(msg).run(SELECT.one(BusinessPartnerAddress).where({businessPartnerId: BUSINESSPARTNER}));
    // for the address to notification association - extra field
    const associationUUID = await cds.tx(msg).run(SELECT.one(Notification).where({businessPartnerId: BUSINESSPARTNER}));
    address.notification_id=associationUUID.ID;
    const res = await cds.tx(msg).run(INSERT.into(Address).entries(address));
    console.log("Address inserted", result);

  });

  bupaSrv.on("BusinessPartner/Changed", async msg => {
    console.log("<< event caught", msg);
    const BUSINESSPARTNER = (+(msg.data.KEY[0].BUSINESSPARTNER)).toString();
    const bpIsAlive = await cds.tx(msg).run(SELECT.one(Notification).where({businessPartnerId: BUSINESSPARTNER}));
    if(bpIsAlive.verificationStatus_code == "P"){
      const bpMarkVerified= await cds.tx(msg).run(UPDATE(Notification).where({businessPartnerId: BUSINESSPARTNER}).set({verificationStatus_code:"V"}));
    }    
    console.log("<< BP marked verified >>")
  });

  srv.after("UPDATE", Notification, async req => {
    console.log("Notification update", req.businessPartnerId);
    sendToServerless(req.businessPartnerId);
  });

  srv.on("UPDATE", Address, async req => {
    // To keep track of modification status
    req.data.isModified = true;
    const res = await cds.tx(req).run(UPDATE(Address).set(req.data).where({businessPartnerId: req.data.businessPartnerId}));
    console.log("<< modified address >>", res);
    
  });

  // srv.on("PATCH", Address, async req => {
  //   // To keep track of modification status
  //   req.data.isModified = true;
  //   const res = await cds.tx(req).run(UPDATE(Address).set(req).where({businessPartnerId: req.data.businessPartnerId}));
  //   console.log("<< modified address >>", res);
    
  // });

  async function sendToServerless(bp){
    const result =  await cds.run(SELECT.one.from("my.businessPartnerValidation.Notification as N").leftJoin("my.businessPartnerValidation.Address as A").on({"N.businessPartnerId":"A.businessPartnerId"}).where("N.businessPartnerId", bp));
    const statusValues={"N":"NEW", "P":"PROCESS", "INV":"INVALID", "V":"VERIFIED"}
    // Format JSON as per serverless requires
    const formatter = {
      businessPartner: result.businessPartnerId,
      verificationStatus: statusValues[result.verificationStatus_code]
    }

    // if(result.isModified == true){
      formatter.address = {
        addressId: result.addressId,
        streetName: result.streetName,
        postalCode: result.postalCode
      }
    // }
    console.log("<< data to serverless >>>", result);
    console.log("<< formatted >>>>>", formatter);
    bupaSrv.emit("BusinessPartner/verified", formatter);
  }

  
}