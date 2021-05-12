package io.fischermatte.geolud.server.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.fischermatte.geolud.server.domain.chat.ChatMessage;
import io.reactivex.rxjava3.subjects.ReplaySubject;
import io.reactivex.rxjava3.subjects.Subject;
import org.junit.jupiter.api.Disabled;
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
import org.springframework.web.reactive.socket.client.ReactorNettyWebSocketClient;
import org.springframework.web.reactive.socket.client.WebSocketClient;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import static io.fischermatte.geolud.server.rest.api.v1.Paths.CHAT;
import static io.reactivex.rxjava3.core.BackpressureStrategy.LATEST;
import static java.util.concurrent.TimeUnit.SECONDS;
import static org.awaitility.Awaitility.await;
import static org.junit.jupiter.api.Assertions.fail;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
class ChatWebSocketTest {
    private static final Logger LOG = LoggerFactory.getLogger(ChatWebSocketTest.class);

    @LocalServerPort
    private int port;

    @Autowired
    private ObjectMapper objectMapper;

    @Disabled
    @Test
    void test() throws InterruptedException {
        // create a list and wait
        List<ChatMessage> messages = new ArrayList<>();
        ReplaySubject<ChatMessage> publisher = ReplaySubject.create();

        new Thread(() -> {
            WebSocketClient client = new ReactorNettyWebSocketClient();
            client.execute(websocketUri(), webSocketHandler(publisher, messages));
        }).start();
        Thread.sleep(100);
        publisher.onNext(new ChatMessage("Hello Test"));
        await().atMost(5, SECONDS).until(() -> messages.size() == 1);
    }

    private WebSocketHandler webSocketHandler(Subject<ChatMessage> publisher, List<ChatMessage> receivingMessages) {
        return session -> {
            session.receive()
                    .map(WebSocketMessage::getPayloadAsText)
                    .map(this::fromJson)
                    .subscribe(receivingMessages::add);
            return session.send(publisher.map(this::toJson).map(session::textMessage).toFlowable(LATEST));
        };
    }

    private ChatMessage fromJson(String json) {
        ChatMessage chatMessage = null;
        try {
            chatMessage = objectMapper.readValue(json, ChatMessage.class);
        } catch (IOException e) {
            fail("could not read chat message");
        }
        return chatMessage;
    }

    private String toJson(ChatMessage chatMessage) {
        String json = null;
        try {
            json = objectMapper.writeValueAsString(chatMessage);
        } catch (JsonProcessingException e) {
            fail("could not write chat message");
        }
        return json;
    }

    private URI websocketUri() {
        return URI.create("ws://localhost:" + port + CHAT);
    }
}
