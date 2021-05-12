package io.fischermatte.geolud.server.config.chat;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.fischermatte.geolud.server.config.ApplicationConfig;
import io.fischermatte.geolud.server.service.mail.MailService;
import io.reactivex.rxjava3.core.BackpressureStrategy;
import io.reactivex.rxjava3.schedulers.Schedulers;
import io.reactivex.rxjava3.subjects.ReplaySubject;
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


@Component
public class ChatWebSocketHandler implements WebSocketHandler {
    private static final Logger LOG = LoggerFactory.getLogger(ApplicationConfig.class);

    private final ObjectMapper objectMapper;
    private final MailService mailService;
    private LocalDateTime lastChatNotificationEmail;
    private ReplaySubject<String> subject;

    public ChatWebSocketHandler(ObjectMapper objectMapper, MailService mailService) {
        this.objectMapper = objectMapper;
        this.mailService = mailService;
        this.subject = ReplaySubject.createWithTimeAndSize(2, TimeUnit.MINUTES, Schedulers.single(), 10);
    }

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        // 1/2: broadcast incoming messages by sending it to the observer (subject)
        session.receive()
                .map(WebSocketMessage::getPayloadAsText)
                .doOnNext(this::notifyChatAction)
                .map(this::fromJson)
                .subscribe(chatMessage -> {
                    chatMessage.setTimeStamp(LocalDateTime.now());
                    subject.onNext(toJson(chatMessage));
                });
        // 2/2: tell the websocket session that the subject is the publishing source
        return session.send(subject.map(session::textMessage).toFlowable(BackpressureStrategy.LATEST));
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

    private void notifyChatAction(String message) {
        LOG.info("chat action going on: " + message);
        LocalDateTime now = LocalDateTime.now();
        if (lastChatNotificationEmail == null || this.lastChatNotificationEmail.isBefore(now.minusHours(1))) {
            mailService.sendEmail("GEOLUD-SITE: Chat actions going on ...", message);
        }
        lastChatNotificationEmail = LocalDateTime.now();
    }
}
