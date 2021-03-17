
const loadNotifications = require("./testscripts/loadNotifications")
const loadNotificationChange = require("./testscripts/changeNotificationStatus");
const createNotification = require("./testscripts/createNotification");
const verifyStatus = require("./testscripts/confirmNotificationStatus");
const tokenGenerator = require("./testscripts/util/getAuthToken");
const deleteNotifications = require("./testscripts/deleteNotifications");
const createAndUpdateBP = require("./testscripts/asyncHandler");

// Payload for BP Creation, ensure it's unique 
var payload = {
    "BusinessPartner": "171000139",
    "BusinessPartnerIsBlocked": true,
    "BusinessPartnerFullName": "Black Magic"
};
jest.setTimeout(30000);
var token;
var testObject = {};
beforeAll(async () => {
     createNotification.createNotification(payload);
    return tokenGenerator.generateToken().then(bearerToken => {
        token = "Bearer " + bearerToken.data.access_token;
    });
},10000);

test("Notifications are loaded", async () => {
  return  loadNotifications.loadNotifications().then(data => {
        expect(data.status).toBe(200);
    });
});


// describe("Create Business Partner",()=>{
// test("Create BP",async ()=>{
//     return createAndUpdateBP.handleBP(payload, token).then(data=>{
//         console.log(data);
//         expect(data.status).toBe(201);
//     });
// });
// });

describe("A",  () => {
    test("Notification recieved in BP", async () => {
        let object = { "businessPartnerId": payload.BusinessPartner };
        return loadNotifications.loadNotifications(false, true, payload.BusinessPartner).then(data => {
            testObject.ID = data.data.value[0].ID;
             expect(data.data.value).toMatchObject([object]);
        });
    });
});
describe("B",  () => {
    test(`Notification For Business Partner Creation Recieved`,async () => {
        return loadNotifications.loadNotifications(testObject.ID).then(data => {
            expect(data.data).toMatchObject(testObject);
        });
    });
});
describe("C",  () => {
    test("Enable Draft",async () => {
        return loadNotificationChange.enableDraft(testObject.ID, token).then(data => {
            expect(data.status).toBe(201);
        });
    });
});
describe("D",  () => {
    test("Check Stored Draft", async() => {
        return loadNotificationChange.checkStoredDraft(testObject.ID, token).then(data => {
            expect(data.status).toBe(200);
        });
    });
});
describe("E", () => {
    test("Check Stored Draft Status", async() => {
        return loadNotificationChange.checkDraftStatus(testObject.ID, token).then(data => {
            expect(data.status).toBe(200);
        })
    });
});
describe("F", () => {
    test("Check Side Effects", async () => {
        return loadNotificationChange.checkSideEffects(testObject.ID, token).then(data => {
            expect(data.status).toBe(200);
        })
    });
});
describe("G", () => {
    test("Change Notification Status", async () => {
        return loadNotificationChange.publishDraft(testObject.ID, token).then(data => {
            expect(data.status).toBe(201);
        })
    });
});
describe("H", () => {
    test("Notifications Status Change to Verified", async () => {
        let returnFormat = { "verificationStatus_code": 'V' };
        return loadNotifications.loadNotifications(testObject.ID).then(data => {
            expect(data.data).toMatchObject(returnFormat);
        });
    });

});

// describe("Validate Notification Status Change", () => {
//     // test("Notification recieved in BP", () => {
//     //     let object = { "businessPartnerId": payload.BusinessPartner };
//     //     return loadNotifications.loadNotifications(false, true, payload.BusinessPartner).then(data => {
//     //         console.log(">>>>>>>>>>>>>>>>>> BP", data)
//     //         testObject.ID = data.data.value[0].ID;
//     //         expect(data.data.value).toMatchObject([object]);
//     //     });
//     // });

//     // test(`Notification For Business Partner Creation Recieved`, () => {
//     //     return loadNotifications.loadNotifications(testObject.ID).then(data => {
//     //         expect(data.data).toMatchObject(testObject);
//     //     });
//     // });

//     // test("Enable Draft", () => {
//     //     return loadNotificationChange.enableDraft(testObject.ID, token).then(data => {
//     //         expect(data.status).toBe(201);
//     //     });
//     // });
//     // test("Check Stored Draft", () => {
//     //     return loadNotificationChange.checkStoredDraft(testObject.ID, token).then(data => {
//     //         expect(data.status).toBe(200);
//     //     });
//     // });
//     // test("Check Stored Draft Status", () => {
//     //     return loadNotificationChange.checkDraftStatus(testObject.ID, token).then(data => {
//     //         expect(data.status).toBe(200);
//     //     })
//     // });
//     // test("Check Side Effects", () => {
//     //     return loadNotificationChange.checkSideEffects(testObject.ID, token).then(data => {
//     //         expect(data.status).toBe(200);
//     //     })
//     // });
//     // test("Change Notification Status", () => {
//     //     return loadNotificationChange.publishDraft(testObject.ID, token).then(data => {
//     //         expect(data.status).toBe(201);
//     //     })
//     // });

//     test("Notifications Status Change to Verified", () => {
//         let returnFormat = { "verificationStatus_code": 'V' };
//         return loadNotifications.loadNotifications(testObject.ID).then(data => {
//             expect(data.data).toMatchObject(returnFormat);
//         });
//     });

// });

describe("Change Business Partner Locked Status", () => {
    beforeAll(async () => {
        return verifyStatus.mockStatusChangeEvent(payload.BusinessPartner);
    });
    test("Notifications Status Change to Confirmed", async () => {
        let returnFormat = { "verificationStatus_code": "C" };
        return loadNotifications.loadNotifications(false, true, payload.BusinessPartner).then(data => {
            console.log("verificationStatus_code", data.data);
            let temp = data.data.value.filter((e) => e.verificationStatus_code === "C");
            expect(temp.length).toBe(1);
        });
    });
}, 15000);

describe("Clean up", () => {

    test("Delete the created Notifications", () => {
        return deleteNotifications.deleteNotification(token, testObject).then(data => {
            expect(data.status).toBe(204);
        });
    });
});
