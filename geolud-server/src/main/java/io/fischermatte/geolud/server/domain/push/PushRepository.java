package io.fischermatte.geolud.server.domain.push;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface PushRepository extends ReactiveMongoRepository<Push, String> {
}
