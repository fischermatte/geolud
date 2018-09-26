package io.fischermatte.geolud.server.config;

import io.fischermatte.geolud.server.chat.ChatWebSocketHandler;
import io.fischermatte.geolud.server.infrastructure.DataInitializer;
import nl.martijndwars.webpush.PushService;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.task.SimpleAsyncTaskExecutor;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.reactive.HandlerMapping;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.config.WebFluxConfigurerComposite;
import org.springframework.web.reactive.handler.SimpleUrlHandlerMapping;
import org.springframework.web.reactive.socket.server.support.WebSocketHandlerAdapter;

import javax.annotation.PostConstruct;
import javax.validation.constraints.NotNull;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.Security;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Executor;

import static io.fischermatte.geolud.server.config.ApiPaths.CHAT;

@EnableAsync
@Configuration
public class ApplicationConfig {
    private static final Logger LOG = LoggerFactory.getLogger(ApplicationConfig.class);

    static {
        // needed for PushService
        Security.addProvider(new BouncyCastleProvider());
    }
    private final DataInitializer dataInitializer;

    public ApplicationConfig(DataInitializer dataInitializer) {
        this.dataInitializer = dataInitializer;
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
    public HandlerMapping webSocketMapping(ChatWebSocketHandler chatWebSocketHandler) {
        Map<String, Object> map = new HashMap<>();
        map.put(CHAT, chatWebSocketHandler);
        var simpleUrlHandlerMapping = new SimpleUrlHandlerMapping();
        simpleUrlHandlerMapping.setUrlMap(map);
        simpleUrlHandlerMapping.setOrder(10);
        return simpleUrlHandlerMapping;
    }

    @Bean
    public WebSocketHandlerAdapter handlerAdapter() {
        return new WebSocketHandlerAdapter();
    }

    @Bean
    public PushService pushService(PushProperties pushProperties) throws GeneralSecurityException {
        return new PushService(pushProperties.getVapidPublicKey(), pushProperties.getVapidPrivateKey(), "a-subject");
    }

    @Validated
    @Configuration
    @PropertySource("classpath:application.properties")
    @ConfigurationProperties("application.push")
    public static class PushProperties {
        @NotNull
        private String vapidPublicKey;
        @NotNull
        private String vapidPrivateKey;

        public String getVapidPublicKey() {
            return vapidPublicKey;
        }

        public void setVapidPublicKey(String vapidPublicKey) {
            this.vapidPublicKey = vapidPublicKey;
        }

        public String getVapidPrivateKey() {
            return vapidPrivateKey;
        }

        public void setVapidPrivateKey(String vapidPrivateKey) {
            this.vapidPrivateKey = vapidPrivateKey;
        }
    }

    @Validated
    @Configuration
    @PropertySource("classpath:application.properties")
    @ConfigurationProperties(prefix = "application.mail")
    public class MailProperties {
        @NotNull
        private String to;

        public String getTo() {
            return to;
        }

        public void setTo(String to) {
            this.to = to;
        }
    }

}
