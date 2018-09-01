package io.fischermatte.geolud.server.notification.w3c;

public enum NotificationDirection {
    AUTO("auto"), LTR("ltr"), RTL("rtl");

    private final String value;

    NotificationDirection(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}