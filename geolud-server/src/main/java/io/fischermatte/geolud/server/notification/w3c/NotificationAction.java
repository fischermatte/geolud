package io.fischermatte.geolud.server.notification.w3c;
import com.fasterxml.jackson.annotation.JsonAutoDetect;

import static com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility.ANY;

@JsonAutoDetect(
        fieldVisibility = ANY
)
public class NotificationAction {
    private String action;
    private String icon;
    private String title;

    public NotificationAction withAction(String action) {
        this.action = action;
        return this;
    }

    public NotificationAction withIcon(String icon) {
        this.icon = icon;
        return this;
    }

    public NotificationAction withTitle(String title) {
        this.title = title;
        return this;
    }
}
