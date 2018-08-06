package io.fischermatte.geolud.server.notification.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface PushRegistrationRepository extends ReactiveMongoRepository<PushRegistration, String> {
}
