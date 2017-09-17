package org.fischermatte.icke.server;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.reactive.function.server.RouterFunction;

import static org.springframework.web.reactive.function.server.RouterFunctions.resources;

@Configuration
public class IckeConfiguration {

    @Bean
    public RouterFunction<?> router() {
        return resources("/**", new ClassPathResource("/static/"));
    }
}
