package org.fischermatte.icke.server;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;

import java.util.List;

import static java.util.Arrays.asList;
import static org.springframework.web.reactive.function.server.RouterFunctions.resources;

@Configuration
public class Config {

    private static final List<String> APP_STATES = asList("/home", "/skills", "/resume", "/projects", "/contact");

    @Bean
    public RouterFunction<?> router() {
        return resources("/**", new ClassPathResource("/static/"));
    }

    // remove once https://github.com/spring-projects/spring-boot/issues/9785 is fixed
    @Bean
    public WebFilter redirectToIndex() {
        return (exchange, chain) -> {
            if (isBaseUrl(exchange) || isAppState(exchange)) {
                return chain.filter(exchange.mutate().request(
                        exchange.getRequest().mutate().path("/index.html").build()).build());
            }
            return chain.filter(exchange);
        };
    }

    private boolean isBaseUrl(ServerWebExchange exchange) {
        return exchange.getRequest().getURI().getPath().equals("/");
    }


    // FIXME make html 5 routing more generic, use regex
    private boolean isAppState(ServerWebExchange exchange) {
        return APP_STATES.stream().anyMatch(exchange.getRequest().getURI().getPath()::startsWith);
    }

}
