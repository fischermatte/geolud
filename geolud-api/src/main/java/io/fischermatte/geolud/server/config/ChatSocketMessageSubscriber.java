package io.fischermatte.geolud.server.config;

import io.fischermatte.geolud.server.domain.chat.ChatMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import reactor.core.publisher.UnicastProcessor;

import java.util.Optional;

class ChatSocketMessageSubscriber {
    private static final Logger LOG = LoggerFactory.getLogger(ChatSocketMessageSubscriber.class);

    private UnicastProcessor<ChatMessage> messagePublisher;
    @SuppressWarnings("OptionalUsedAsFieldOrParameterType")
    private Optional<ChatMessage> lastReceivedMessage = Optional.empty();

    ChatSocketMessageSubscriber(UnicastProcessor<ChatMessage> messagePublisher) {
        this.messagePublisher = messagePublisher;
    }

    void onNext(ChatMessage message) {
        lastReceivedMessage = Optional.of(message);
        messagePublisher.onNext(message);
    }

    void onError(Throwable error) {
        LOG.error("failed to handle chat message", error);
    }

    void onComplete() {
        lastReceivedMessage.ifPresent(chatMessage -> {
            messagePublisher.onNext(new ChatMessage("user-left", "User Left"));
        });
    }
}
