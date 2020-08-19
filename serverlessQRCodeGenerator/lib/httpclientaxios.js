'use strict';
const qr = require('qrcode');
const axios = require("axios");
const util = require("./util");
const { PassThrough } = require('stream');
const logger = require('cf-nodejs-logging-support');
logger.setLoggingLevel("info");

async function postImage(context, msg, event) {
        try{
            const destination = await context.getServiceCredentialsJSON('destination-srv');
            const destinationNameFromContext = await context.getSecretValueJSON('destination-name', 'name');
            const destinationName = destinationNameFromContext.name;
            const data = await util.readDetails(destination, destinationName, context, logger);
            const response = await processBpPayload(data.authTokens[0].value, data.destinationConfiguration, event, msg);
            return response;
        }catch(error){
            throw error;
        }
}

async function processBpPayload(accessToken, destinationConfiguration, event, msg) {
        let bpDetails = msg.data;
        if (bpDetails.verificationStatus === "PROCESS") {
            bpDetails.searchTerm1 = "VERIFIED";
            bpDetails.businessPartnerIsBlocked = false;
        } else {
            bpDetails.searchTerm1 = bpDetails.verificationStatus;
            bpDetails.businessPartnerIsBlocked = true;
        }
        try{
            const headers = await fetchXsrfToken(destinationConfiguration, accessToken, bpDetails);
            if (bpDetails.addressModified) {
                await updateBpAddress(destinationConfiguration, accessToken, headers, bpDetails);
                await updateBp(destinationConfiguration, accessToken, headers, bpDetails);
                if(!bpDetails.businessPartnerIsBlocked){
                    await postGeneratedImage(destinationConfiguration, accessToken, headers, bpDetails);
                    return "SUCCESS";
                }
                return "SUCCESS"; 
            } else {
                await updateBp(destinationConfiguration, accessToken, headers, bpDetails);
                if(!bpDetails.businessPartnerIsBlocked){
                    await postGeneratedImage(destinationConfiguration, accessToken, headers, bpDetails);
                    return "SUCCESS";
                }
                return "SUCCESS";
            }
        }catch(error){
            logger.info("error", error.message);
            return error;
        }
}

async function fetchXsrfToken(destinationConfiguration, accessToken, bpDetails) {
        return await axios({
            method: 'get',
            url: destinationConfiguration.URL + "API_CV_ATTACHMENT_SRV/",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'Image/png',
                'Slug': bpDetails.businessPartner + ".png",
                'BusinessObjectTypeName': 'BUS1006',
                'LinkedSAPObjectKey': bpDetails.businessPartner,
                'x-csrf-token': 'fetch'
            }
        }).then(response => {
                const headers = {
                    token: response.headers['x-csrf-token'],
                    cookie: response.headers['set-cookie'][0]
                };
                logger.info("Success - Fetching CSRF Token : ");
                return headers;
        }).catch(error => {
            logger.info("Error - Fetching CSRF token Error");
            throw util.errorHandler(error, logger);
        });
}

async function updateBpAddress(destinationConfiguration, accessToken, headers, bpDetails) {
        return await axios({
            method: 'patch',
            url: destinationConfiguration.URL + "API_BUSINESS_PARTNER/A_BusinessPartnerAddress(BusinessPartner='" + bpDetails.businessPartner + "',AddressID='" + bpDetails.addressId + "')",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'x-csrf-token': headers.token,
                'Cookie': headers.cookie
            },
            data: {
                "PostalCode": bpDetails.postalCode,
                "StreetName": bpDetails.streetName
            }
        }).then(response =>{
            logger.info("SUCCESS - Updating BP Address");
        }).catch(error => {
            logger.info("Error Updating BP Address");
            throw util.errorHandler(error, logger);
        });
}

async function updateBp(destinationConfiguration, accessToken, headers, bpDetails) {
       return await axios({
            method: 'patch',
            url: destinationConfiguration.URL + "API_BUSINESS_PARTNER/A_BusinessPartner('" + bpDetails.businessPartner + "')",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'x-csrf-token': headers.token,
                'Cookie': headers.cookie
            },
            data: {
                "SearchTerm1": bpDetails.searchTerm1,
                "BusinessPartnerIsBlocked": bpDetails.businessPartnerIsBlocked
            }
        }).then(response =>{
            logger.info("Success - Updating BP");
        }).catch(error => {
            logger.info("Error in Updating BP");
            throw util.errorHandler(error, logger);
        });
}

async function postGeneratedImage(destinationConfiguration, accessToken, headers, bpDetails) {
            return await generateQRCode(bpDetails).then(async image =>{
                const bp = bpDetails.businessPartner;
                return await axios({
                    method: 'post',
                    url: destinationConfiguration.URL + "API_CV_ATTACHMENT_SRV/AttachmentContentSet",
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'Image/jpg',
                        'Slug': bp + '.jpg',
                        'BusinessObjectTypeName': 'BUS1006',
                        'LinkedSAPObjectKey': '000' + bp,
                        'x-csrf-token': headers.token,
                        'Cookie': headers.cookie
                    },
                    data: image,
                }).then(response =>{
                    logger.info("SUCCESS - Uploading Image");
                }).catch(error => {
                    logger.info("ERROR - Uploading Image" + error);
                    throw util.errorHandler(error, logger);
                });
            }).catch(error => {
                logger.info("ERROR - uploading image" + error);
                throw error;
            });
}

function generateQRCode(bpDetails){
    return new Promise(function (resolve, reject) {
        let imageData = {
            businessPartner: bpDetails.businessPartner,
            businessPartnerName: bpDetails.businessPartnerName,
            addressId: bpDetails.addressId,
            streetName: bpDetails.streetName,
            country: bpDetails.country,
            postalCode: bpDetails.postalCode
        }

        const stream = new PassThrough();
        qr.toFileStream(stream, JSON.stringify(imageData));
        let chunks = [];
        stream.on('data', (chunk) => {
            chunks.push(chunk);
        });

        let image;
        stream.on('end',  () =>{
            image = Buffer.concat(chunks);
            resolve(image);
        });

        stream.on("error", error => {
            logger.info("ERROR - QR Code generation", error);
            reject(new Error("ERROR - Generating QR Code"));
        });
    });
}

module.exports = {
    postImage
};