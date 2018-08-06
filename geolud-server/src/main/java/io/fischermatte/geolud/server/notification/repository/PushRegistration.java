package io.fischermatte.geolud.server.notification.repository;

import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotNull;

public class PushRegistration {

    @Id
    private String id;

    @NotNull
    private String endpoint;

    @NotNull
    private String p256dh;

    @NotNull
    private String auth;

    PushRegistration() {
    }

    public PushRegistration(String id, String endpoint, String p256dh, String auth) {
        this.id = id;
        this.endpoint = endpoint;
        this.p256dh = p256dh;
        this.auth = auth;
    }

    public String getId() {
        return id;
    }

    public String getEndpoint() {
        return endpoint;
    }

    public String getP256dh() {
        return p256dh;
    }

    public String getAuth() {
        return auth;
    }



}
