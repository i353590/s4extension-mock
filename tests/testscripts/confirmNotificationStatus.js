/**
 * Creates an Notification
 */
 const axios = require("axios");
 const config = require("./util/config");
 let baseUrl = config.mock.url;
 
 // workaround for local test cors error;
 axios.defaults.adapter = require('axios/lib/adapters/http');
/**
 * 
 * @param {BP ID} Business Partner ID 
 * @returns promise
 */
 const mockStatusChangeEvent = async (id) => {
     try {
         let endpoint = `api-business-partner/A_BusinessPartner('${id}')`;
         let options = {
             url: `${baseUrl}${endpoint}`,
             method: "Put",
             headers: {
                 "Content-Type": "application/json",
             },
             data : {"BusinessPartnerIsBlocked": false}
         };
         return await axios(options);
     } catch (error) {
         console.error(error);
         throw (error);
     }
 }
 
 module.exports = {
    mockStatusChangeEvent: mockStatusChangeEvent
 }