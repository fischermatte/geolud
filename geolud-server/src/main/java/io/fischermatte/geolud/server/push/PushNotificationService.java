package io.fischermatte.geolud.server.push;

import io.fischermatte.geolud.server.config.ApplicationConfig.PushProperties;
import org.springframework.stereotype.Service;

@Service
public class PushNotificationService {

    private final PushProperties pushProperties;

    public PushNotificationService(PushProperties pushProperties) {
        this.pushProperties = pushProperties;
    }
}
