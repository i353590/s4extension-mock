const axios = require("axios");
const config = require("./util/config");
let baseUrl = config.service_domain;
// workaround for local test cors error;
axios.defaults.adapter = require('axios/lib/adapters/http');
//load one notification 

/**
 * 
 * @param {guuid} Notification id 
 * @param {string} token: Bearer Token 
 * @returns promise
 */
const enableDraft = async (id, token) => {
    try {
        let path = `sales/Notifications(ID=${id},IsActiveEntity=true)/service.businessPartnerValidation.SalesService.draftEdit?$select=HasActiveEntity,HasDraftEntity,ID,IsActiveEntity,businessPartnerId,businessPartnerName,verificationStatus_code&$expand=DraftAdministrativeData($select=DraftUUID,InProcessByUser),verificationStatus($select=code,updateCode)`;
        let options = {
            url: `${baseUrl}${path}`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            data: { "PreserveChanges": true }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * 
 * @param {guuid} Notification id 
 * @param {string} token: Bearer Token 
 * @returns promise
 */
const checkStoredDraft = async (id, token) => {
    try {

        let storedDraftPath = `sales/Notifications(ID=${id},IsActiveEntity=false)`;
        let options2 = {
            url: `${baseUrl}${storedDraftPath}`,
            method: "Get",
            headers: {
                "Authorization": token
            }
        };
        return await axios(options2);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * 
 * @param {guuid} Notification id 
 * @param {string} token: Bearer Token 
 * @returns promise
 */
const checkDraftStatus = async (id, token) => {
    try {
        let changeDraftStatusValue = `sales/Notifications(ID=${id},IsActiveEntity=false)`;
        let options3 = {
            url: `${baseUrl}${changeDraftStatusValue}`,
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            data: { "verificationStatus_code": "V" }
        }
        return await axios(options3);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * 
 * @param {guuid} Notification id 
 * @param {string} token: Bearer Token 
 * @returns promise
 */
const checkSideEffects = async (id, token) => {
    try {
        let sideEffectUrl = `sales/Notifications(ID=${id},IsActiveEntity=false)/service.businessPartnerValidation.SalesService.draftPrepare`;
        let options4 = {
            url: `${baseUrl}${sideEffectUrl}`,
            method: "POST",
            data: { "SideEffectsQualifier": "" },
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        };
        return await axios(options4);
    } catch (error) {
        console.error(error);
        throw (error);
    }
};

const publishDraft = async (id, token) => {
    try {
        let finalChangeUrl = `sales/Notifications(ID=${id},IsActiveEntity=false)/service.businessPartnerValidation.SalesService.draftActivate`;
        let options5 = {
            url: `${baseUrl}${finalChangeUrl}`,
            method: "POST",
            data: { "SideEffectsQualifier": "" },
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        };
        return await axios(options5);
    } catch (error) {
        console.error(error);
        throw error;
    }
};


module.exports = {
    enableDraft: enableDraft,
    checkStoredDraft: checkStoredDraft,
    checkDraftStatus: checkDraftStatus,
    checkSideEffects: checkSideEffects,
    publishDraft: publishDraft
}