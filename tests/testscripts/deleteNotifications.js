const axios = require("axios");
const config = require("./util/config");
let baseUrl = config.service_domain;

const deleteNotification = async (token, testObject) => {
    try {
        var endpoint = `sales/Notifications(ID=${testObject.ID},IsActiveEntity=true)`;
        
        let options = {
            url: `${baseUrl}${endpoint}`,
            method: "DELETE",
            headers: {
                "Authorization": token
            }
        };
        return await axios(options);
    } catch (error) {
        console.log(error);
        throw (error);
    }
}


module.exports = {
    deleteNotification: deleteNotification
}
