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

    private final ObjectMapper jsonMapper;

    public ChatConfig(ObjectMapper jsonMapper) {
        this.jsonMapper = jsonMapper;
    }

    @Bean
    public HandlerMapping webSocketMapping() {
        Map<String, Object> map = new HashMap<>();
        map.put(CHAT, chatWebSocketHandler());
        SimpleUrlHandlerMapping simpleUrlHandlerMapping = new SimpleUrlHandlerMapping();
        simpleUrlHandlerMapping.setUrlMap(map);
        simpleUrlHandlerMapping.setOrder(10);
        return simpleUrlHandlerMapping;
    }

    @Bean
    public WebSocketHandler chatWebSocketHandler() {
        Subject<ChatMessage> messages = PublishSubject.create();
        return session -> {
            session.receive() // TODO handle this without explicit subscription ?
                    .map(WebSocketMessage::getPayloadAsText)
                    .map(this::fromJson)
                    .log()
                    .subscribe(messages::onNext);
            return session.send(messages
                    .map(this::toJSON)
                    .map(session::textMessage).toFlowable(LATEST));
        };
    }

    @Bean
    public WebSocketHandlerAdapter handlerAdapter() {
        return new WebSocketHandlerAdapter();
    }

    private ChatMessage fromJson(String json) {
        try {
            return jsonMapper.readValue(json, ChatMessage.class);
        } catch (IOException e) {
            throw new RuntimeException("Invalid JSON:" + json, e);
        }
    }

    private String toJSON(ChatMessage message) {
        try {
            return jsonMapper.writeValueAsString(message);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}

