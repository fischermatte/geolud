package io.fischermatte.geolud.server.notification.repository;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(SpringExtension.class)
@DataMongoTest
class PushRegistrationRepositoryTest {

    @Autowired
    private PushRegistrationRepository repository;

    @Test
    void save() {
        assertNotNull(repository);

        PushRegistration subscription = subscription();
        PushRegistration savedSubscription = repository.save(subscription).block();
        assertNotNull(savedSubscription);
        assertNotNull(savedSubscription.getId());

        PushRegistration foundSubscription = repository.findAll().blockFirst();
        assertNotNull(foundSubscription);
        assertNotNull(foundSubscription.getId());
        assertEquals(foundSubscription.getId(), savedSubscription.getId());
        assertEquals(foundSubscription.getAuth(), subscription.getAuth());
        assertEquals(foundSubscription.getEndpoint(), subscription.getEndpoint());
        assertEquals(foundSubscription.getP256dh(), subscription.getP256dh());
    }

    private PushRegistration subscription() {
        return new PushRegistration(
                null,
                "https://fcm.googleapis.com/fcm/send/cnSLStu725E:APA91bHpdx9PUiF9NvN_QeG7Rw1hQgzbk5wNEvyakYqFu_a3wSwyP_KERDWNNNmoS6IEBIz4vGAUk66B6u4bow5NpI4H_kTH82MsKhjFtogTK_CJ-s6cS4fiAftnS1o0kSmr_9IxU_Lq43yuVM4v31vZcAXgJ5Gpyg",
                "BGNslqNwWK8RjB-mwDymyJB8bGLdySog9aGeYoSv10sZS2ecF5HaFxQaCe_eUd3octQ_OZwxvyQ5G8aF2W1NxmI",
                "72sRoyQP5a7YdBoE4yjDPA");


    }
}