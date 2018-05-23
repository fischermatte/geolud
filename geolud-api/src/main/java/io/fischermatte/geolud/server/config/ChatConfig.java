package io.fischermatte.geolud.server.config;

import io.fischermatte.geolud.server.domain.chat.ChatMessage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.HandlerMapping;
import org.springframework.web.reactive.handler.SimpleUrlHandlerMapping;
import org.springframework.web.reactive.socket.server.support.WebSocketHandlerAdapter;
import reactor.core.publisher.Flux;
import reactor.core.publisher.UnicastProcessor;

import java.util.HashMap;
import java.util.Map;

import static io.fischermatte.geolud.server.rest.api.v1.Paths.CHAT;

@Configuration
public class ChatConfig {

    @Bean
    public UnicastProcessor<ChatMessage> messagePublisher(){
        return UnicastProcessor.create();
    }

    @Bean
    public Flux<ChatMessage> messages(UnicastProcessor<ChatMessage> messagePublisher) {
        return messagePublisher
                .replay(25)
                .autoConnect();
    }

    @Bean
    public HandlerMapping webSocketMapping(UnicastProcessor<ChatMessage> messagePublisher, Flux<ChatMessage> messages) {
        Map<String, Object> map = new HashMap<>();
        map.put(CHAT, new ChatSocketHandler(messagePublisher, messages));
        SimpleUrlHandlerMapping simpleUrlHandlerMapping = new SimpleUrlHandlerMapping();
        simpleUrlHandlerMapping.setUrlMap(map);
        simpleUrlHandlerMapping.setOrder(10);
        return simpleUrlHandlerMapping;
    }

    @Bean
    public WebSocketHandlerAdapter handlerAdapter() {
        return new WebSocketHandlerAdapter();
    }
}

