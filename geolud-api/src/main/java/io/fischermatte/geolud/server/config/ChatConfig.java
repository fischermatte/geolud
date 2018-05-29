package io.fischermatte.geolud.server.config;

import io.reactivex.BackpressureStrategy;
import io.reactivex.Flowable;
import io.reactivex.Observable;
import io.reactivex.subjects.PublishSubject;
import io.reactivex.subjects.Subject;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.HandlerMapping;
import org.springframework.web.reactive.handler.SimpleUrlHandlerMapping;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.server.support.WebSocketHandlerAdapter;

import java.util.HashMap;
import java.util.Map;

import static io.fischermatte.geolud.server.rest.api.v1.Paths.CHAT;
import static java.util.concurrent.TimeUnit.SECONDS;

@Configuration
public class ChatConfig {

//    @Bean
//    public UnicastProcessor<ChatMessage> messagePublisher(){
//        return UnicastProcessor.create();
//    }
//
//    @Bean
//    public Flux<ChatMessage> messages(UnicastProcessor<ChatMessage> messagePublisher) {
//        return messagePublisher
//                .replay(25)
//                .autoConnect();
//    }

    @Bean
    public Observable<String> messages() {
        Observable<String> messages = Observable.interval(1, SECONDS)
                .map(tick -> "Done tick " + tick);
        Subject<String> subject = PublishSubject.create();
        messages.subscribe(subject);
        subject.subscribe(s -> System.out.println("subject subscribe: " + s));
        return subject;
    }

//    @Bean
//    public HandlerMapping webSocketMapping(UnicastProcessor<ChatMessage> messagePublisher, Flux<ChatMessage> messages) {
//        Map<String, Object> map = new HashMap<>();
//        map.put(CHAT, new ChatSocketHandler(messagePublisher, messages));
//        SimpleUrlHandlerMapping simpleUrlHandlerMapping = new SimpleUrlHandlerMapping();
//        simpleUrlHandlerMapping.setUrlMap(map);
//        simpleUrlHandlerMapping.setOrder(10);
//        return simpleUrlHandlerMapping;
//    }

    @Bean
    public HandlerMapping webSocketMapping(Observable<String> messages) {
        Map<String, Object> map = new HashMap<>();
        map.put(CHAT, (WebSocketHandler) session -> {
            Flowable<WebSocketMessage> websocketMessages = messages
                    .map(session::textMessage).toFlowable(BackpressureStrategy.LATEST);
            session.receive().map(WebSocketMessage::getPayloadAsText).subscribe(a -> System.out.println("received " + a));
            return session.send(websocketMessages);
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
}

