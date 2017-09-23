package org.fischermatte.icke.server;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.server.WebFilter;

import static org.springframework.web.reactive.function.server.RouterFunctions.resources;

@Configuration
public class Config {

    @Bean
    public RouterFunction<?> router() {
        return resources("/**", new ClassPathResource("/static/"));
    }

    // remove once https://github.com/spring-projects/spring-boot/issues/9785 is fixed
    @Bean
    public WebFilter redirectToIndex() {
        return (exchange, chain) -> {
            if (exchange.getRequest().getURI().getPath().equals("/")) {
                return chain.filter(exchange.mutate().request(exchange.getRequest().mutate().path("/index.html")
                        .build()).build());
            }
            return chain.filter(exchange);
        };
    }

}
