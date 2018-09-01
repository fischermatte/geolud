package io.fischermatte.geolud.server.notification.w3c;

/**
 * See https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification.
 */
public class NotificationOptions {

    private NotificationAction[] actions;
    private String badge;
    private String body;
    private Object data;
    private NotificationDirection notificationDirection;
    private String icon;
    private String image;
    private String lang;
    private Boolean renotify;
    private Boolean requireInteraction;
    private Boolean silent;
    private String tag;
    private Integer timestamp;
    private Integer[] vibrate;

    public NotificationOptions withActions(NotificationAction[] actions) {
        this.actions = actions;
        return this;
    }

    public NotificationOptions withBadge(String badge) {
        this.badge = badge;
        return this;
    }

    public NotificationOptions withBody(String body) {
        this.body = body;
        return this;
    }

    public NotificationOptions withData(Object data) {
        this.data = data;
        return this;
    }

    public NotificationOptions withNotificationDirection(NotificationDirection notificationDirection) {
        this.notificationDirection = notificationDirection;
        return this;
    }

    public NotificationOptions withIcon(String icon) {
        this.icon = icon;
        return this;
    }

    public NotificationOptions withImage(String image) {
        this.image = image;
        return this;
    }

    public NotificationOptions withLang(String lang) {
        this.lang = lang;
        return this;
    }

    public NotificationOptions withRenotify(Boolean renotify) {
        this.renotify = renotify;
        return this;
    }

    public NotificationOptions withRequireInteraction(Boolean requireInteraction) {
        this.requireInteraction = requireInteraction;
        return this;
    }

    public NotificationOptions withSilent(Boolean silent) {
        this.silent = silent;
        return this;
    }

    public NotificationOptions withTag(String tag) {
        this.tag = tag;
        return this;
    }

    public NotificationOptions withTimestamp(Integer timestamp) {
        this.timestamp = timestamp;
        return this;
    }

    public NotificationOptions withVibrate(Integer[] vibrate) {
        this.vibrate = vibrate;
        return this;
    }

    public NotificationAction[] getActions() {
        return actions;
    }

    public String getBadge() {
        return badge;
    }

    public String getBody() {
        return body;
    }

    public Object getData() {
        return data;
    }

    public NotificationDirection getNotificationDirection() {
        return notificationDirection;
    }

    public String getIcon() {
        return icon;
    }

    public String getImage() {
        return image;
    }

    public String getLang() {
        return lang;
    }

    public Boolean getRenotify() {
        return renotify;
    }

    public Boolean getRequireInteraction() {
        return requireInteraction;
    }

    public Boolean getSilent() {
        return silent;
    }

    public String getTag() {
        return tag;
    }

    public Integer getTimestamp() {
        return timestamp;
    }

    public Integer[] getVibrate() {
        return vibrate;
    }
}
