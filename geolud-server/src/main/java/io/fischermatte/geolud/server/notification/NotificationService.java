package io.fischermatte.geolud.server.notification;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.fischermatte.geolud.server.chat.ChatMessage;
import io.fischermatte.geolud.server.notification.repository.PushRegistration;
import io.fischermatte.geolud.server.notification.repository.PushRegistrationRepository;
import io.fischermatte.geolud.server.notification.w3c.NotificationAction;
import nl.martijndwars.webpush.Notification;
import nl.martijndwars.webpush.PushService;
import nl.martijndwars.webpush.Subscription;
import org.jose4j.lang.JoseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.concurrent.ExecutionException;

@Service
public class NotificationService {
    private static final Logger LOG = LoggerFactory.getLogger(NotificationService.class);

    private final PushService pushService;
    private final PushRegistrationRepository registrationRepository;
    private final ObjectMapper objectMapper;

    public NotificationService(PushService pushService, PushRegistrationRepository registrationRepository, ObjectMapper objectMapper) {
        this.pushService = pushService;
        this.registrationRepository = registrationRepository;
        this.objectMapper = objectMapper;
    }

    public Flux<PushRegistration> sendNotification(ChatMessage message) {
        LOG.debug("sending notification for chat message \"{}\" to all subscribers", message.getText());
        return registrationRepository.findAll()
                .doOnNext(pushRegistration -> sendNotification(pushRegistration, message));
    }

    private void sendNotification(PushRegistration subscription, ChatMessage message) {
        LOG.debug("sending notification \"{}\" to subscriber {} and endppoint {}", message.getText(), subscription.getId(), subscription.getEndpoint());
        try {
            Notification notification = new Notification(toSubscription(subscription), toPayload(message));
            pushService.send(notification);
        } catch (GeneralSecurityException | IOException | JoseException | ExecutionException | InterruptedException e) {
            LOG.error("failed to send notification", e);
        }
    }

    private String toPayload(ChatMessage chatMessage) {
        return toJson(new NgSwNotificationPayload().withNotification((NgSwNotification) new NgSwNotification()
                .withTitle("New Chat Message from " + chatMessage.getUserName())
                .withIcon("assets/icons/icon-72x72.png")
                .withActions(new NotificationAction[]{new NotificationAction().withTitle("Open Chat").withAction("open-chat")})
                .withBody(chatMessage.getText())
        ));
    }

    private String toJson(Object value) {
        try {
            return objectMapper.writeValueAsString(value);
        } catch (JsonProcessingException e) {
            throw new IllegalStateException("failed to write json", e);
        }
    }

    private static Subscription toSubscription(PushRegistration pushRegistration) {
        Subscription s = new Subscription();
        s.endpoint = pushRegistration.getEndpoint();
        s.keys = s.new Keys(pushRegistration.getP256dh(), pushRegistration.getAuth());
        return s;
    }
}
