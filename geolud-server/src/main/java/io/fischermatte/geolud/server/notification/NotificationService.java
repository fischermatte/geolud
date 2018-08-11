package io.fischermatte.geolud.server.notification;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.fischermatte.geolud.server.chat.ChatMessage;
import io.fischermatte.geolud.server.notification.repository.PushRegistration;
import io.fischermatte.geolud.server.notification.repository.PushRegistrationRepository;
import io.reactivex.Completable;
import nl.martijndwars.webpush.Notification;
import nl.martijndwars.webpush.PushService;
import nl.martijndwars.webpush.Subscription;
import org.apache.http.HttpResponse;
import org.jose4j.lang.JoseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.concurrent.Future;

import static reactor.adapter.rxjava.RxJava2Adapter.completableToMono;

@Service
public class NotificationService {
    private static final Logger LOG = LoggerFactory.getLogger(NotificationService.class);

    private final PushService pushService;
    private final PushRegistrationRepository subscriptionRepository;
    private final ObjectMapper objectMapper;

    public NotificationService(PushService pushService, PushRegistrationRepository subscriptionRepository, ObjectMapper objectMapper) {
        this.pushService = pushService;
        this.subscriptionRepository = subscriptionRepository;
        this.objectMapper = objectMapper;
    }

    public void sendNotification(ChatMessage message) {
        subscriptionRepository.findAll().subscribe(subscription -> sendNotification(subscription, message));
    }

    private Mono<Void> sendNotification(PushRegistration subscription, ChatMessage message) {
        try {
            Notification notification = new Notification(toWebPushSubscription(subscription), toJson(message));
            Future<HttpResponse> future = pushService.sendAsync(notification);
            return completableToMono(Completable.fromFuture(future));
        } catch (GeneralSecurityException | IOException | JoseException e) {
            LOG.error("failed to send notification",  e);
            return Mono.empty();
        }
    }

    private String toJson(ChatMessage message) {
        try {
            return objectMapper.writeValueAsString(message);
        } catch (JsonProcessingException e) {
            throw new IllegalStateException("failed to write json");
        }
    }

    private static Subscription toWebPushSubscription(PushRegistration pushRegistration) {
        Subscription s = new Subscription();
        s.endpoint  = pushRegistration.getEndpoint();
        s.keys = s.new Keys(pushRegistration.getP256dh(), pushRegistration.getAuth());
        return s;
    }
}