package io.fischermatte.geolud.server.domain.chat;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

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
}
