package io.fischermatte.geolud.server.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.fischermatte.geolud.server.domain.chat.ChatMessage;
import io.reactivex.subjects.PublishSubject;
import io.reactivex.subjects.Subject;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.HandlerMapping;
import org.springframework.web.reactive.handler.SimpleUrlHandlerMapping;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.server.support.WebSocketHandlerAdapter;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static io.fischermatte.geolud.server.rest.api.v1.Paths.CHAT;
import static io.reactivex.BackpressureStrategy.LATEST;

@Configuration
public class ChatConfig {

    @Bean
    public Subject<ChatMessage> messages() {
        Subject<ChatMessage> subject = PublishSubject.create();
//        subject.subscribe(s -> System.out.println("subject subscribe: " + s));
        return subject;
    }

    @Bean
    public HandlerMapping webSocketMapping(Subject<ChatMessage> messages) {
        Map<String, Object> map = new HashMap<>();
        map.put(CHAT, (WebSocketHandler) session -> {
            session.receive() // TODO handle this without explicit subscription
                    .map(WebSocketMessage::getPayloadAsText)
                    .subscribe(chatMessageJson -> messages.onNext(fromJson(chatMessageJson)));
            return session.send(messages
                    .map(chatMessage -> session.textMessage(toJSON(chatMessage))).toFlowable(LATEST));
//            return session.send(session.receive().doOnNext(WebSocketMessage::retain));
        });
        SimpleUrlHandlerMapping simpleUrlHandlerMapping = new SimpleUrlHandlerMapping();
        simpleUrlHandlerMapping.setUrlMap(map);
        simpleUrlHandlerMapping.setOrder(10);
        return simpleUrlHandlerMapping;
    }

    @Bean
    public WebSocketHandlerAdapter handlerAdapter() {
        return new WebSocketHandlerAdapter();
    }

    private ChatMessage fromJson(String json) {
        System.out.println("received json : " + json);
        try {
            return new ObjectMapper().readValue(json, ChatMessage.class);
        } catch (IOException e) {
            throw new RuntimeException("Invalid JSON:" + json, e);
        }
    }

    private String toJSON(ChatMessage message) {
        try {
            return new ObjectMapper().writeValueAsString(message);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}

