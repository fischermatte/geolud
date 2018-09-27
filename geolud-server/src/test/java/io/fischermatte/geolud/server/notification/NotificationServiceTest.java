package io.fischermatte.geolud.server.notification;

import io.fischermatte.geolud.server.chat.ChatMessage;
import io.fischermatte.geolud.server.notification.repository.PushRegistration;
import io.fischermatte.geolud.server.notification.repository.PushRegistrationRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@ExtendWith(SpringExtension.class)
class NotificationServiceTest {

    @Autowired
    private NotificationService notificationService;

    @Autowired
    private PushRegistrationRepository pushRegistrationRepository;

    @BeforeEach
    void setUp() {
        List<PushRegistration> registrations = List.of(pushRegistration(), pushRegistration(), pushRegistration());
        pushRegistrationRepository.saveAll(registrations).then().block();
    }

    @Test
    void pushNotification() {
        var sendRegistrations = new ArrayList<PushRegistration>();
        ChatMessage chatMessage = new ChatMessage("huhu");
        notificationService.sendNotification(chatMessage).map(sendRegistrations::add).then().block();
        assertEquals(3, sendRegistrations.size());
    }

    private PushRegistration pushRegistration() {
        return new PushRegistration(
                null,
                "https://fcm.googleapis.com/fcm/send/cnSLStu725E:APA91bHpdx9PUiF9NvN_QeG7Rw1hQgzbk5wNEvyakYqFu_a3wSwyP_KERDWNNNmoS6IEBIz4vGAUk66B6u4bow5NpI4H_kTH82MsKhjFtogTK_CJ-s6cS4fiAftnS1o0kSmr_9IxU_Lq43yuVM4v31vZcAXgJ5Gpyg",
                "BGNslqNwWK8RjB-mwDymyJB8bGLdySog9aGeYoSv10sZS2ecF5HaFxQaCe_eUd3octQ_OZwxvyQ5G8aF2W1NxmI",
                "72sRoyQP5a7YdBoE4yjDPA");
    }
}