package io.fischermatte.geolud.server.notification;

import io.fischermatte.geolud.server.chat.ChatMessage;
import io.fischermatte.geolud.server.notification.repository.PushSubscriptionRepository;
import io.reactivex.Completable;
import nl.martijndwars.webpush.Notification;
import nl.martijndwars.webpush.PushService;
import nl.martijndwars.webpush.Subscription;
import org.apache.http.HttpResponse;
import org.jose4j.lang.JoseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.concurrent.Future;

import static reactor.adapter.rxjava.RxJava2Adapter.completableToMono;

@Service
public class NotificationService {
    private static final Logger LOG = LoggerFactory.getLogger(NotificationService.class);

    private final PushService pushService;
    private final PushSubscriptionRepository subscriptionRepository;

    public NotificationService(PushService pushService, PushSubscriptionRepository subscriptionRepository) {
        this.pushService = pushService;
        this.subscriptionRepository = subscriptionRepository;
    }

    public Flux<Void> sendNotification(ChatMessage message) {
        return subscriptionRepository.findAll().flatMap(subscription ->
                sendNotification(subscription, message)
        );
    }

    private Mono<Void> sendNotification(Subscription subscription, ChatMessage message) {
        try {
            Notification notification = new Notification(subscription, message.getText());
            Future<HttpResponse> future = pushService.sendAsync(notification);
            return completableToMono(Completable.fromFuture(future));
        } catch (GeneralSecurityException | IOException | JoseException e) {
            LOG.error("failed to send notification",  e);
            return Mono.empty();
        }
    }
}
