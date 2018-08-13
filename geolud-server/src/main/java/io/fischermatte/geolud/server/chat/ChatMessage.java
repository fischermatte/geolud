package io.fischermatte.geolud.server.chat;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.apache.commons.lang.builder.ToStringBuilder;

import java.time.LocalDateTime;

import static com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;

@JsonAutoDetect(
        fieldVisibility = Visibility.ANY
)
public class ChatMessage {
    private String text;
    private ChatUser user;
    private ChatMessageType type;
    private LocalDateTime timestamp;

    public ChatMessage() {
    }

    public ChatMessage(String text) {
        this.text = text;
    }

    public void setTimeStamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public String getText() {
        return text;
    }

    public ChatUser getUser() {
        return user;
    }

    public ChatMessageType getType() {
        return type;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("text", text)
                .append("user", user)
                .append("type", type)
                .append("timestamp", timestamp)
                .toString();
    }
}

