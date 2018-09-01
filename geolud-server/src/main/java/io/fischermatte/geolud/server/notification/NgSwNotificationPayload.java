package io.fischermatte.geolud.server.notification;

public class NgSwNotificationPayload {

    private NgSwNotification notification;

    public NgSwNotificationPayload withNotification(NgSwNotification notification) {
        this.notification = notification;
        return this;
    }

    public NgSwNotification getNotification() {
        return notification;
    }
}
