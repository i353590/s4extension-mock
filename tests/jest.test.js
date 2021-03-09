
const loadNotifications = require("./testscripts/loadNotifications")
const loadNotificationChange = require("./testscripts/changeNotificationStatus");
const createNotification = require("./testscripts/createNotification");
const verifyStatus = require("./testscripts/confirmNotificationStatus");
const tokenGenerator = require("./testscripts/util/getAuthToken");
test("Notifications are loaded", () => {
    return loadNotifications.loadNotifications().then(data => {
        expect(data.status).toBe(200);
    });
});

// Payload for BP Creation, ensure it's unique 
var payload = {
    "BusinessPartner": "17100056",
    "BusinessPartnerIsBlocked": true,
    "BusinessPartnerFullName": "black dragon"
};
var token;
var testObject = {};
describe("Validate Notification Status Change", () => {
    beforeAll(() => {
        createNotification.createNotification(payload);
        tokenGenerator.generateToken().then(bearerToken => {
            token = "Bearer " + bearerToken.data.access_token;
        });
    });
    test("Notification recieved in BP", () => {
        let object = { "businessPartnerId": payload.BusinessPartner };
        return loadNotifications.loadNotifications(false, true, payload.BusinessPartner).then(data => {
            testObject.ID = data.data.value[0].ID;
            expect(data.data.value[0]).toMatchObject(object);
        });
    });

    test(`Notification For Business Partner Creation Recieved`, () => {
        return loadNotifications.loadNotifications(testObject.ID).then(data => {
            expect(data.data).toMatchObject(testObject);
        });
    });

    test("Enable Draft", () => {
        return loadNotificationChange.enableDraft(testObject.ID, token).then(data => {
            expect(data.status).toBe(201);
        });
    });
    test("Check Stored Draft", () => {
        return loadNotificationChange.checkStoredDraft(testObject.ID, token).then(data => {
            expect(data.status).toBe(200);
        });
    });
    test("Check Stored Draft Status", () => {
        return loadNotificationChange.checkDraftStatus(testObject.ID, token).then(data => {
            expect(data.status).toBe(200);
        })
    });
    test("Check Side Effects", () => {
        return loadNotificationChange.checkSideEffects(testObject.ID, token).then(data => {
            expect(data.status).toBe(200);
        })
    });
    test("Change Notification Status", () => {
        return loadNotificationChange.publishDraft(testObject.ID, token).then(data => {
            expect(data.status).toBe(201);
        })
    });

    test("Notifications Status Change Verification", () => {
        let returnFormat = { "verificationStatus_code": 'V' };
        return loadNotifications.loadNotifications(testObject.ID).then(data => {
            expect(data.data).toMatchObject(returnFormat);
        });
    });

});

describe("Change Business Partner Locked Status", () => {
    beforeAll(() => {
        return verifyStatus.mockStatusChangeEvent(payload.BusinessPartner);
    });
    test("Notifications Status Change Verification", () => {
        let returnFormat = { "verificationStatus_code": "C" };
        return loadNotifications.loadNotifications(false, true, payload.BusinessPartner).then(data => {
            expect(data.data.value[0]).toMatchObject(returnFormat);
        });
    });
});