package io.fischermatte.geolud.server.domain.chat;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang.builder.ToStringBuilder;

public class ChatMessage {

    public String type;
    public String message;
    public String user;

    @JsonCreator
    public ChatMessage(@JsonProperty("type") String type, @JsonProperty("message") String message, @JsonProperty("user") String user) {
        this.type = type;
        this.message = message;
        this.user = user;
    }

    @JsonIgnore
    public String getMessage(){
        return message;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("type", type)
                .append("message", message)
                .append("user", user)
                .toString();
    }
}
