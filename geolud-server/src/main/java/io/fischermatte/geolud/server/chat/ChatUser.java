package io.fischermatte.geolud.server.chat;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(
        fieldVisibility = JsonAutoDetect.Visibility.ANY
)
public class ChatUser {
    private String name;
    private String id;

    public String getName() {
        return name;
    }
}
