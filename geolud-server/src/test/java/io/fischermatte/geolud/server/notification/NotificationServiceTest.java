package io.fischermatte.geolud.server.notification;

import io.fischermatte.geolud.server.chat.ChatMessage;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@SpringBootTest
@ExtendWith(SpringExtension.class)
class NotificationServiceTest {

    @Autowired
    private NotificationService notificationService;

    @Test
    void pushNotification() {
        ChatMessage chatMessage = new ChatMessage("huhu");
        notificationService.sendNotification(chatMessage);
    }
}