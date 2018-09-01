package io.fischermatte.geolud.server.notification;

import io.fischermatte.geolud.server.notification.w3c.NotificationOptions;

/**
 * @angular/pwa specific object for showing notifications Same as W3C's NotificationOptions but also holds the title.
 *
 * @see <a href="https://github.com/angular/angular/blob/6.1.x/packages/service-worker/worker/src/driver.ts">angular/packages/service-worker/worker/src/driver.ts</a>
 */
public class NgSwNotification extends NotificationOptions {

    private String title;

    public NgSwNotification withTitle(String title) {
        this.title = title;
        return this;
    }

    public String getTitle() {
        return title;
    }
}
