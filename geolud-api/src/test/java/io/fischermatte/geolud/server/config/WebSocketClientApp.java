package io.fischermatte.geolud.server.config;

import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.client.ReactorNettyWebSocketClient;
import org.springframework.web.reactive.socket.client.WebSocketClient;

import java.net.URI;
import java.time.Duration;

import static io.fischermatte.geolud.server.rest.api.v1.Paths.CHAT;

public class WebSocketClientApp {

    public static void main(String[] args) {

        WebSocketClient client = new ReactorNettyWebSocketClient();
        client.execute(
                URI.create("ws://localhost:8080" + CHAT),
                session -> session.receive()
                        .map(WebSocketMessage::getPayloadAsText)
                        .log()
                        .then())
                .block(Duration.ofSeconds(100L));
    }
//    public static void main(String[] args) {
//        ReactorNettyWebSocketClient client = new ReactorNettyWebSocketClient();
//        client.execute(
//                URI.create("ws://localhost:8080" + CHAT),
//                session -> session.receive()
//                        .take(1)
//                        .map(WebSocketMessage::getPayloadAsText)
//                        .map(m -> {
//                            System.out.println("payload: " + m);
//                            return m;
//                        })
//                        .doOnNext(System.out::println)
//                        .then())
//                .block(Duration.ofMillis(20000));
//    }
//
//    private static WebSocketMessage chatMessage(WebSocketSession session) {
//        WebSocketMessage webSocketMessage = null;
//        try {
//            ChatMessage chatMessage = new ChatMessage("text", "hello test");
//            webSocketMessage = session.textMessage(new ObjectMapper().writeValueAsString(chatMessage));
//        } catch (JsonProcessingException e) {
//            throw new RuntimeException(e);
//        }
//        return webSocketMessage;
//    }

}
