package io.fischermatte.geolud.server.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.fischermatte.geolud.server.service.mail.MailService;
import io.reactivex.subjects.PublishSubject;
import io.reactivex.subjects.ReplaySubject;
import io.reactivex.subjects.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.SimpleAsyncTaskExecutor;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.reactive.HandlerMapping;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.config.WebFluxConfigurerComposite;
import org.springframework.web.reactive.handler.SimpleUrlHandlerMapping;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.server.support.WebSocketHandlerAdapter;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Executor;

import static io.fischermatte.geolud.server.rest.api.v1.Paths.CHAT;
import static io.reactivex.BackpressureStrategy.LATEST;

@EnableAsync
@Configuration
public class ApplicationConfig {
    private static final Logger LOG = LoggerFactory.getLogger(ApplicationConfig.class);

    private final DataInitializer dataInitializer;
    private final MailService mailService;
    private LocalDateTime lastChatNotificationEmail;


    public ApplicationConfig(DataInitializer dataInitializer, MailService mailService) {
        this.dataInitializer = dataInitializer;
        this.mailService = mailService;
    }

    @PostConstruct
    public void onInit() throws IOException {
        LOG.info("inserting test data... ");
        dataInitializer.insertProjectData();
    }

    @Bean
    public WebFluxConfigurer corsConfigurer() {
        return new WebFluxConfigurerComposite() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/v1/**")
                        .allowedOrigins("*")
                        .allowedMethods("*");
            }
        };
    }

    /**
     * TaskExecutor so we can use @Async annotation. E.g. when sending emails.
     */
    @Bean
    public Executor taskExecutor() {
        return new SimpleAsyncTaskExecutor();
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
        Subject<String> subject = PublishSubject.create();
        return session -> {
            session.receive()
                    .map(WebSocketMessage::getPayloadAsText)
                    .doOnNext(this::notifyChatActionByEmail)
                    .subscribe(subject::onNext);
            return session.send(subject.map(session::textMessage).toFlowable(LATEST));
        };
    }

    private void notifyChatActionByEmail(String message) {
        LocalDateTime now = LocalDateTime.now();
        if (lastChatNotificationEmail == null || this.lastChatNotificationEmail.isBefore(now.minusHours(1))){
            mailService.sendEmail("GEOLUD-SITE: Chat actions going on ...", message);
        }
        lastChatNotificationEmail = LocalDateTime.now();
    }

    @Bean
    public WebSocketHandlerAdapter handlerAdapter() {
        return new WebSocketHandlerAdapter();
    }


}
