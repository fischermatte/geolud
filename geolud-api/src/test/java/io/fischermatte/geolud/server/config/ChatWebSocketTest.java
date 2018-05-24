package io.fischermatte.geolud.server.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.fischermatte.geolud.server.domain.chat.ChatMessage;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import org.springframework.web.reactive.socket.client.ReactorNettyWebSocketClient;
import org.springframework.web.reactive.socket.client.WebSocketClient;
import reactor.core.publisher.Flux;

import java.io.IOException;
import java.net.URI;
import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

import static com.jayway.awaitility.Awaitility.await;
import static io.fischermatte.geolud.server.rest.api.v1.Paths.CHAT;
import static java.util.concurrent.TimeUnit.SECONDS;
import static org.junit.jupiter.api.Assertions.fail;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;
import static reactor.core.publisher.Mono.just;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
class ChatWebSocketTest {
    private static final Logger LOG = LoggerFactory.getLogger(ChatWebSocketTest.class);

    @LocalServerPort
    private int port;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void test() {
        WebSocketClient client = new ReactorNettyWebSocketClient();
        List<ChatMessage> messages = new ArrayList<>();
        client.execute(websocketUri(), webSocketHandler(messages)).block(Duration.ofMillis(20000));
        await().atMost(5, SECONDS).until(() -> messages.size() == 1);
    }

    private WebSocketHandler webSocketHandler(List<ChatMessage> messages) {
        return session -> {
            Flux<ChatMessage> publisher = session.send(just(this.chatMessage(session)))
                    .thenMany(session.receive()
                            .take(1)
                            .map(WebSocketMessage::getPayloadAsText)
                            .log()
                            .map(ChatWebSocketTest.this::toChatMessage));
            publisher.subscribe(messages::add);
            publisher.doOnNext(System.out::println);
            return publisher.then();
        };
    }

    private ChatMessage toChatMessage(String json) {
        ChatMessage chatMessage = null;
        try {
            chatMessage = objectMapper.readValue(json, ChatMessage.class);
        } catch (IOException e) {
            fail("could not read chat message");
        }
        return chatMessage;
    }


    private WebSocketMessage chatMessage(WebSocketSession session) {
        WebSocketMessage webSocketMessage = null;
        try {
            ChatMessage chatMessage = new ChatMessage("text", "hello test");
            webSocketMessage = session.textMessage(objectMapper.writeValueAsString(chatMessage));
        } catch (JsonProcessingException e) {
            fail("could not write chat message");
        }
        return webSocketMessage;
    }

    private URI websocketUri() {
        return URI.create("ws://localhost:" + port + CHAT);
    }
}