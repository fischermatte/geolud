package io.fischermatte.geolud.server.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.fischermatte.geolud.server.domain.chat.ChatMessage;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.publisher.UnicastProcessor;

import java.io.IOException;

class ChatSocketHandler implements WebSocketHandler {

    private UnicastProcessor<ChatMessage> messagePublisher;
    private Flux<String> outputMessages;
    private ObjectMapper mapper;

    public ChatSocketHandler(UnicastProcessor<ChatMessage> messagePublisher, Flux<ChatMessage> messages) {
        this.messagePublisher = messagePublisher;
        this.mapper = new ObjectMapper();
        this.outputMessages = Flux.from(messages).map(this::toJSON);
    }

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        ChatSocketMessageSubscriber subscriber = new ChatSocketMessageSubscriber(messagePublisher);
        session.receive()
                .map(WebSocketMessage::getPayloadAsText)
                .map(this::fromJson)
                .subscribe(subscriber::onNext, subscriber::onError, subscriber::onComplete);
        return session.send(outputMessages.map(session::textMessage));
    }

    private ChatMessage fromJson(String json) {
        try {
            return mapper.readValue(json, ChatMessage.class);
        } catch (IOException e) {
            throw new RuntimeException("Invalid JSON:" + json, e);
        }
    }

    private String toJSON(ChatMessage message) {
        try {
            return mapper.writeValueAsString(message);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
