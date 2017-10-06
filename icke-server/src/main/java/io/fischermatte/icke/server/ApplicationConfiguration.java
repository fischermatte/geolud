package io.fischermatte.icke.server;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.SimpleAsyncTaskExecutor;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.concurrent.Executor;

@EnableAsync
@Configuration
public class ApplicationConfiguration {

    /**
     * Maps all AngularJS routes to index so that they work with direct linking.
     */
    @Controller
    static class Routes {

        @RequestMapping(value = {"/home", "/resume", "/projects", "/contact"})
        public String index() {
            return "forward:/index.html";
        }
    }

    /**
     * TaskExecutor so we can use @Async annotation. E.g. when sending emails.
     */
    @Bean
    public Executor taskExecutor() {
        return new SimpleAsyncTaskExecutor();
    }


}
