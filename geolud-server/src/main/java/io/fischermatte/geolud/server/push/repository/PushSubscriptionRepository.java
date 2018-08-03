package io.fischermatte.geolud.server.push.repository;

import nl.martijndwars.webpush.Subscription;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface PushSubscriptionRepository extends ReactiveMongoRepository<Subscription, String> {
}
