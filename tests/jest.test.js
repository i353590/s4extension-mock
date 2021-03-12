
const loadNotifications = require("./testscripts/loadNotifications")
const loadNotificationChange = require("./testscripts/changeNotificationStatus");
const createNotification = require("./testscripts/createNotification");
const verifyStatus = require("./testscripts/confirmNotificationStatus");
const tokenGenerator = require("./testscripts/util/getAuthToken");
const deleteNotifications = require("./testscripts/deleteNotifications");
test("Notifications are loaded", () => {
    return loadNotifications.loadNotifications().then(data => {
        expect(data.status).toBe(200);
    });
});

// Payload for BP Creation, ensure it's unique 
var payload = {
    "BusinessPartner": "171000104",
    "BusinessPartnerIsBlocked": true,
    "BusinessPartnerFullName": "dark knight"
};
var token;
var testObject = {};
beforeAll(() => {
    createNotification.createNotification(payload);
    tokenGenerator.generateToken().then(bearerToken => {
        token = "Bearer " + bearerToken.data.access_token;
    });
});

describe("A", ()=>{
    test("Notification recieved in BP", () => {
        let object = { "businessPartnerId": payload.BusinessPartner };
        return loadNotifications.loadNotifications(false, true, payload.BusinessPartner).then(data => {
            console.log(">>>>>>>>>>>>>>>>>> BP", data)
            testObject.ID = data.data.value[0].ID;
            expect(data.data.value).toMatchObject([object]);
        });
    });
});
describe("A", ()=>{
    test(`Notification For Business Partner Creation Recieved`, () => {
        return loadNotifications.loadNotifications(testObject.ID).then(data => {
            expect(data.data).toMatchObject(testObject);
        });
    });
});
describe("A", ()=>{
    test("Enable Draft", () => {
        return loadNotificationChange.enableDraft(testObject.ID, token).then(data => {
            expect(data.status).toBe(201);
        });
    });
});
describe("A", ()=>{
    test("Check Stored Draft", () => {
        return loadNotificationChange.checkStoredDraft(testObject.ID, token).then(data => {
            expect(data.status).toBe(200);
        });
    });
});
describe("A", ()=>{
    test("Check Stored Draft Status", () => {
        return loadNotificationChange.checkDraftStatus(testObject.ID, token).then(data => {
            expect(data.status).toBe(200);
        })
    });
});
describe("A", ()=>{
    test("Check Side Effects", () => {
        return loadNotificationChange.checkSideEffects(testObject.ID, token).then(data => {
            expect(data.status).toBe(200);
        })
    });
});
describe("A", ()=>{    test("Change Notification Status", () => {
    return loadNotificationChange.publishDraft(testObject.ID, token).then(data => {
        expect(data.status).toBe(201);
    })
});
});
// describe("last",()=>{
//     test("Notifications Status Change to Verified", () => {
//         let returnFormat = { "verificationStatus_code": 'V' };
//         return loadNotifications.loadNotifications(testObject.ID).then(data => {
//             expect(data.data).toMatchObject(returnFormat);
//         });
//     });

// });

describe("Validate Notification Status Change", () => {
    // test("Notification recieved in BP", () => {
    //     let object = { "businessPartnerId": payload.BusinessPartner };
    //     return loadNotifications.loadNotifications(false, true, payload.BusinessPartner).then(data => {
    //         console.log(">>>>>>>>>>>>>>>>>> BP", data)
    //         testObject.ID = data.data.value[0].ID;
    //         expect(data.data.value).toMatchObject([object]);
    //     });
    // });

    // test(`Notification For Business Partner Creation Recieved`, () => {
    //     return loadNotifications.loadNotifications(testObject.ID).then(data => {
    //         expect(data.data).toMatchObject(testObject);
    //     });
    // });

    // test("Enable Draft", () => {
    //     return loadNotificationChange.enableDraft(testObject.ID, token).then(data => {
    //         expect(data.status).toBe(201);
    //     });
    // });
    // test("Check Stored Draft", () => {
    //     return loadNotificationChange.checkStoredDraft(testObject.ID, token).then(data => {
    //         expect(data.status).toBe(200);
    //     });
    // });
    // test("Check Stored Draft Status", () => {
    //     return loadNotificationChange.checkDraftStatus(testObject.ID, token).then(data => {
    //         expect(data.status).toBe(200);
    //     })
    // });
    // test("Check Side Effects", () => {
    //     return loadNotificationChange.checkSideEffects(testObject.ID, token).then(data => {
    //         expect(data.status).toBe(200);
    //     })
    // });
    // test("Change Notification Status", () => {
    //     return loadNotificationChange.publishDraft(testObject.ID, token).then(data => {
    //         expect(data.status).toBe(201);
    //     })
    // });

    test("Notifications Status Change to Verified", () => {
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
    test("Notifications Status Change to Confirmed", () => {
        let returnFormat = { "verificationStatus_code": "C" };
        return loadNotifications.loadNotifications(false, true, payload.BusinessPartner).then(data => {
            console.log("verificationStatus_code", data.data);
            let temp = data.data.value.filter((e) => e.verificationStatus_code === "C");
            expect(temp.length).toBe(1);
        });
    });
});

describe("Clean up", () => {

    test("Delete the created Notifications", () => {
        return deleteNotifications.deleteNotification(token, testObject).then(data => {
            expect(data.status).toBe(204);
        });
    });
});
