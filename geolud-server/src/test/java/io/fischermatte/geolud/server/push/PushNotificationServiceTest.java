package io.fischermatte.geolud.server.push;

import io.fischermatte.geolud.server.chat.ChatMessage;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@SpringBootTest
@ExtendWith(SpringExtension.class)
class PushNotificationServiceTest {

    @Autowired
    private PushNotificationService notificationService;

    @Test
    void pushNotification() {
        ChatMessage chatMessage = new ChatMessage("huhu");
        notificationService.pushNotification(chatMessage);
    }
}