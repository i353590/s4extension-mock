module.exports = srv => {
    // Mock events for s4
    srv.on("CREATE", req => {
        const payload = {KEY: [{BUSINESSPARTNER: req.data.BusinessPartner}]};
        srv.emit("BusinessPartner/Created", payload);
        console.log('<< event emitted', payload);
    });

    srv.on("UPDATE", req => {
        const payload = {KEY: [{BUSINESSPARTNER: req.data.BusinessPartner}]};
        srv.emit("BusinessPartner/Changed", payload);
        console.log('<< event emitted', payload);
    });
}