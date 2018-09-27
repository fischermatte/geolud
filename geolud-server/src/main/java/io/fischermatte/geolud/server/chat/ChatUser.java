package io.fischermatte.geolud.server.chat;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import static com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility.ANY;

@JsonAutoDetect(
        fieldVisibility = ANY
)
public class ChatUser {
    private String name;
    private String id;

    public String getName() {
        return name;
    }
}
