/**
 * 
 * @returns authenticaion token
 */
const { default: axios } = require('axios');
const credentials = require("./config");

const generateToken = async () => {
    let options = {
        method: 'POST',
        url: credentials.token_url+ "?grant_type=client_credentials&response_type=token",
        headers: {
            'Authorization': 'Basic ' + Buffer.from(credentials.xsuaa.client_id + ':' + credentials.xsuaa.client_secret).toString('base64')
        }
    };
   return await axios(options);

};

module.exports = {
    generateToken: generateToken
}


