package io.fischermatte.geolud.server.chat;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.time.LocalDateTime;

import static com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;

@JsonAutoDetect(
        fieldVisibility = Visibility.ANY
)
class ChatMessage {
    private String text;
    private ChatUser user;
    private ChatMessageType type;
    private LocalDateTime timestamp;

    public void setTimeStamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}

enum ChatMessageType {
    LOGIN, CHAT
}

@JsonAutoDetect(
        fieldVisibility = Visibility.ANY
)
class ChatUser {
    private String name;
    private String id;
}
