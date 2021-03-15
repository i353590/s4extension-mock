
// const loadNotificationChange = require("./changeNotificationStatus");
// const createNotification = require("./createNotification");
// const testObject = {};
// const handleBP = async (payload, token) => {
//     createNotification.createNotification(payload).then(data => {
//         loadNotificationChange.loadNotifications(false, true, payload.BusinessPartner).then(notificationId => {
//             console.log(notificationId);
//             testObject.ID = notificationId.data.value[0].ID;
//             loadNotificationChange.enableDraft(testObject.ID, token).then(data1 => {
//                 loadNotificationChange.checkStoredDraft(testObject.ID, token).then(data2 => {
//                     loadNotificationChange.checkDraftStatus(testObject.ID, token).then(data3 => {
//                         loadNotificationChange.checkSideEffects(testObject.ID, token).then(data4 => {
//                              loadNotificationChange.publishDraft(testObject.ID, token).then(data5 => {
//                                 return data5;
//                             }).catch(error => {
//                                 console.error(error);
//                                 throw (error);
//                             });
//                         }).catch(error => {
//                             console.error(error);
//                             throw (error);
//                         });
//                     }).catch(error => {
//                         console.error(error);
//                         throw (error);
//                     });
//                 }).catch(error => {
//                     console.error(error);
//                     throw (error);
//                 });
//             }).catch(error => {
//                 console.error(error);
//                 throw (error);
//             });
//         }).catch(error => {
//             console.error(error);
//             throw (error);
//         });
//     }).catch(error => {
//         console.error(error);
//         throw (error);
//     });
// };
// module.exports = {
//     handleBP: handleBP
// };