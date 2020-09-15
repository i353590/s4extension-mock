const cds = global.cds || require('@sap/cds')
module.exports = async srv => {
    
    const messaging = await cds.connect.to('messaging')
    // Mock events for s4
    srv.on("CREATE", req => {
        const payload = {KEY: [{BUSINESSPARTNER: req.data.BusinessPartner}]};
        const msgTx = messaging.tx(req)
        msgTx.emit("refapps/s4ems/abc/S4H/BO/BusinessPartner/Created", payload);
        console.log('<< event emitted', payload);
    });

    srv.on("UPDATE", req => {
        const payload = {KEY: [{BUSINESSPARTNER: req.data.BusinessPartner}]};
        const msgTx = messaging.tx(req)
        msgTx.emit("refapps/s4ems/abc/S4H/BO/BusinessPartner/Changed", payload);
        console.log('<< event emitted', payload);
    });
}