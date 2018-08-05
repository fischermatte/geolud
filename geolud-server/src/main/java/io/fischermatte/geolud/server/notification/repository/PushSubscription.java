package io.fischermatte.geolud.server.notification.repository;

import nl.martijndwars.webpush.Subscription;
import org.springframework.data.annotation.Id;

import java.util.UUID;

public class PushSubscription {

    @Id
    private String id;

    private Subscription subscription;

    public PushSubscription() {

    }

    public static PushSubscription create(Subscription subscription) {
        PushSubscription pushSubscription = new PushSubscription();
        pushSubscription.id = UUID.randomUUID().toString();
        pushSubscription.subscription = subscription;
        return pushSubscription;
    }

    public String getId() {
        return id;
    }

    public Subscription getSubscription() {
        return subscription;
    }
}
