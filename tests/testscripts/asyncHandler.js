
const loadNotificationChange = require("./changeNotificationStatus");
const createNotification = require("./createNotification");
const loadNotifications = require("./loadNotifications")
const testObject = {};
const handleBP =  (payload, token) => {
    createNotification.createNotification(payload).then(data => {
        console.info("Notification Created")
        loadNotifications.loadNotifications(false, true, payload.BusinessPartner).then(notificationId => {
            console.log(notificationId.data.value[0]);
            testObject.ID = notificationId.data.value[0].ID;
            loadNotificationChange.enableDraft(testObject.ID, token).then(data1 => {
                console.info(data1.data);
                loadNotificationChange.checkStoredDraft(testObject.ID, token).then(data2 => {
                    loadNotificationChange.checkDraftStatus(testObject.ID, token).then(data3 => {
                        loadNotificationChange.checkSideEffects(testObject.ID, token).then(data4 => {
                        return  loadNotificationChange.publishDraft(testObject.ID, token).then(data5 => {
                                return data5;
                            }).catch(error => {
                                console.error(error);
                                return error;
                            });
                        }).catch(error => {
                            console.error(error);
                            return (error);
                        });
                    }).catch(error => {
                        console.error(error);
                        return (error);
                    });
                }).catch(error => {
                    console.error(error);
                    return (error);
                });
            }).catch(error => {
                console.error(error);
                return (error);
            });
        }).catch(error => {
            console.error(error);
            return (error);
        });
    }).catch(error => {
        console.error(error);
        return (error);
    });
};
module.exports = {
    handleBP: handleBP
};