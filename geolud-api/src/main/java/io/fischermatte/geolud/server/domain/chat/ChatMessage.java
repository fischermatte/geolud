package io.fischermatte.geolud.server.domain.chat;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang.builder.ToStringBuilder;

public class ChatMessage {

    public String type;
    public String message;

    @JsonCreator
    public ChatMessage(@JsonProperty("type") String type, @JsonProperty("message") String message) {
        this.type = type;
        this.message = message;
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
                .toString();
    }
}
