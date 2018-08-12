package io.fischermatte.geolud.server.notification;

public class Notification {
    private String body;
    private String icon;
    private String lang;
    private String tag;
    private String title;

    public Notification withBody(String body) {
        this.body = body;
        return this;
    }

    public Notification withIcon(String icon) {
        this.icon = icon;
        return this;
    }

    public Notification withLang(String lang) {
        this.lang = lang;
        return this;
    }

    public Notification withTag(String tag) {
        this.tag = tag;
        return this;
    }

    public Notification withTitle(String title) {
        this.title = title;
        return this;
    }
}
}
