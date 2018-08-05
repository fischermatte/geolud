package io.fischermatte.geolud.server.push;

import io.fischermatte.geolud.server.chat.ChatMessage;
import io.fischermatte.geolud.server.config.ApplicationConfig.PushProperties;
import io.fischermatte.geolud.server.push.repository.PushSubscriptionRepository;
import nl.martijndwars.webpush.PushService;
import nl.martijndwars.webpush.Subscription;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.security.GeneralSecurityException;
import java.security.Security;

@Service
public class PushNotificationService {
    static {
        Security.addProvider(new BouncyCastleProvider());
    }

    private static final Logger LOG = LoggerFactory.getLogger(PushNotificationService.class);

    private final PushProperties pushProperties;
    private final PushSubscriptionRepository subscriptionRepository;

    public PushNotificationService(PushProperties pushProperties, PushSubscriptionRepository subscriptionRepository) {
        this.pushProperties = pushProperties;
        this.subscriptionRepository = subscriptionRepository;
    }

    public void pushNotification(ChatMessage message) {
        LOG.debug(pushProperties.getVapidPublicKey());
        PushService pushService;
        try {
            pushService = new PushService(pushProperties.getVapidPublicKey(), pushProperties.getVapidPrivateKey(), "a-subject");
        } catch (GeneralSecurityException e) {
            throw new IllegalStateException("failed to create push service", e);
        }

//        subscriptionRepository.findAll().flatMap(subscription ->
//                sendNotification(subscription, message)
//        );

    }

    private void sendNotification(Subscription subscription, ChatMessage message) {
//        Notification notification = new Notification(subscription.endpoint,subscription.keys.)
    }
}
