package io.fischermatte.geolud.server.notification;

public class NotificationPayload {

    private Notification notification;

    public Notification getNotification() {
        return notification;
    }

    public NotificationPayload withNotification(Notification notification) {
        this.notification = notification;
        return this;
    }

    /* {
        "notification": {
            "title": "Angular News",
                    "body": "Newsletter Available!",
                    "icon": "assets/main-page-logo-small-hat.png",
                    "vibrate": [100, 50, 100],
            "data": {
                "dateOfArrival": Date.now(),
                        "primaryKey": 1
            },
            "actions": [{
                "action": "explore",
                        "title": "Go to the site"
            }]
        }
    };*/
}
