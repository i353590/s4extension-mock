/**
 * Creates an Notification
 */
const axios = require("axios");
const config = require("./util/config");
let baseUrl = config.mock.url;

// workaround for local test cors error;
axios.defaults.adapter = require('axios/lib/adapters/http');
const createNotification = async (payload) => {
    try {
        let endpoint = "api-business-partner/A_BusinessPartner";
        let options = {
            url: `${baseUrl}${endpoint}`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: payload
        };
        return await axios(options);
    } catch (error) {
        console.error(error.data);
        throw (error);
    }
}

module.exports = {
    createNotification: createNotification
}