/**
 * Loads notifications
 */
 const axios = require("axios");
 const tokenGenerator = require("./util/getAuthToken");
 const config = require("./util/config");
 let baseUrl = config.service_domain;
 
 // workaround for local test cors error;
 axios.defaults.adapter = require('axios/lib/adapters/http');
 
 /**
  * 
  * @param {GUUID} Notification ID 
  * @param {boolean} isBPSearch true if it's called for BP search 
  * @param {string} bpId: Business partner ID 
  * @returns 
  */
 const loadNotifications = async (id, isBPSearch, bpId) => {
     let res = await tokenGenerator.generateToken();
     let bearerToken = "Bearer " + res.data.access_token;
     try {
         var endpoint;
         if (isBPSearch) {
             endpoint = `sales/Notifications?$filter=(businessPartnerId eq '${bpId}')`;
         } else {
             endpoint = id ? `sales/Notifications(ID=${id},IsActiveEntity=true)` : "sales/Notifications?$top=1";
         }
         let options = {
             url: `${baseUrl}${endpoint}`,
             method: "Get",
             headers: {
                 "Authorization": bearerToken
             }
         };
         return await axios(options);
     } catch (error) {
         console.log(error);
         throw (error);
     }
 }
 
 module.exports = {
     loadNotifications: loadNotifications
 }