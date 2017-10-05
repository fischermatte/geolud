package io.fischermatte.icke.server.contact;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import javax.validation.constraints.NotNull;

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
