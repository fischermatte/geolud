package io.fischermatte.geolud.server.push;

import io.fischermatte.geolud.server.chat.ChatMessage;
import io.fischermatte.geolud.server.config.ApplicationConfig.PushProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class PushNotificationService {
    private static final Logger LOG = LoggerFactory.getLogger(PushNotificationService.class);

    private final PushProperties pushProperties;

    public PushNotificationService(PushProperties pushProperties) {
        this.pushProperties = pushProperties;
    }

    public void pushNotification(ChatMessage message) {
        LOG.debug(pushProperties.getVapidPublicKey());
    }
}
