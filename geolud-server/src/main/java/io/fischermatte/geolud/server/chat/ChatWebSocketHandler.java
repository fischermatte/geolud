package io.fischermatte.geolud.server.chat;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.fischermatte.geolud.server.config.ApplicationConfig;
import io.fischermatte.geolud.server.infrastructure.mail.MailService;
import io.fischermatte.geolud.server.notification.NotificationService;
import io.reactivex.subjects.ReplaySubject;
import io.reactivex.subjects.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.concurrent.TimeUnit;

import static io.reactivex.BackpressureStrategy.LATEST;
import static io.reactivex.schedulers.Schedulers.single;

@Component
public class ChatWebSocketHandler implements WebSocketHandler {
    private static final Logger LOG = LoggerFactory.getLogger(ApplicationConfig.class);

    private final ObjectMapper objectMapper;
    private final MailService mailService;
    private final NotificationService notificationService;
    private LocalDateTime lastChatNotificationEmail;
    private Subject<String> subject;

    public ChatWebSocketHandler(ObjectMapper objectMapper, MailService mailService, NotificationService notificationService) {
        this.objectMapper = objectMapper;
        this.mailService = mailService;
        this.notificationService = notificationService;
        this.subject = ReplaySubject.createWithTimeAndSize(2, TimeUnit.MINUTES, single(), 10);
    }

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        // 1/2: broadcast incoming messages by sending it to the observer (subject)
        var input = session.receive()
                .map(WebSocketMessage::getPayloadAsText)
                .map(this::fromJson)
                .doOnNext(this::notifyChatAction)
                .doOnNext(chatMessage -> {
                    chatMessage.setTimeStamp(LocalDateTime.now());
                    subject.onNext(toJson(chatMessage));
                }).then();
        // 2/2: tell the websocket session that the subject is the publishing source
        var output = session.send(subject.map(session::textMessage).toFlowable(LATEST));
        return Mono.zip(input, output).then();
    }

    private String toJson(ChatMessage chatMessage) {
        try {
            return objectMapper.writeValueAsString(chatMessage);
        } catch (JsonProcessingException e) {
            throw new IllegalArgumentException("invalid chat message", e);
        }
    }

    private ChatMessage fromJson(String messageJson) {
        try {
            return objectMapper.readValue(messageJson, ChatMessage.class);
        } catch (IOException e) {
            throw new IllegalArgumentException("invalid json from websocket", e);
        }
    }

    private void notifyChatAction(ChatMessage message) {
        LOG.info("chat action going on: " + message);
        notificationService.sendNotification(message).subscribe();
        LocalDateTime now = LocalDateTime.now();
        if (lastChatNotificationEmail == null || this.lastChatNotificationEmail.isBefore(now.minusHours(1))) {
            mailService.sendEmail("GEOLUD-SITE: Chat actions from user " + message.getUser().getName(), message.toString());
        }
        lastChatNotificationEmail = LocalDateTime.now();
    }
}
