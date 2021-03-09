const cred =  require("./localSample");
const vcap = cred.system_env_json.VCAP_SERVICES;
const appenv = cred.application_env_json.VCAP_APPLICATION;
const topicName = "refapps/bpems/abc/BusinessPartnerValidation-srv/1234";
let mockserverurl = appenv.application_uris[0].split(".");
mockserverurl[0] = "https://businesspartnervalidation-srv-mocks1";
mockserverurl = mockserverurl.join(".");
module.exports = {
    "token_url": vcap.xsuaa[0].credentials.url + '/oauth/token',
    "service_domain": 'https://' + appenv.application_uris[0]+"/",
    "em_queue_url": vcap["enterprise-messaging"][0].credentials.messaging[2].uri + '/messagingrest/v1/topics/'+topicName+'/messages',
    "enterprise_messaging": {
        "grant_type": "client_credentials",
        "client_id": vcap["enterprise-messaging"][0].credentials.messaging[2].oa2.clientid,
		"client_secret": vcap["enterprise-messaging"][0].credentials.messaging[2].oa2.clientsecret
    },
    "xsuaa": {
        "grant_type": "client_credentials",
        "client_id": vcap.xsuaa[0].credentials.clientid,
        "client_secret": vcap.xsuaa[0].credentials.clientsecret
    },
    "mock": {
        "url":mockserverurl +"/"
    }
}