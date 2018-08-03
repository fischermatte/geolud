package io.fischermatte.geolud.server.push;

import io.fischermatte.geolud.server.push.repository.PushSubscriptionRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import nl.martijndwars.webpush.Subscription;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

import static io.fischermatte.geolud.server.config.ApiPaths.PUSH;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

@Api(value = "push", description = "registers a client for push notifications")
@RestController
public class PushSubscriptionController {

    private final PushSubscriptionRepository repository;

    public PushSubscriptionController(PushSubscriptionRepository repository) {
        this.repository = repository;
    }

    @ApiOperation(value = "Registers a PushSubscription", nickname = "registerPushSubscription")
    @PostMapping(value = PUSH, consumes = {APPLICATION_JSON_VALUE})
    @ResponseStatus(CREATED)
    public Mono<Void> registerPushSubscription(@Valid @RequestBody Subscription subscription) {
        return this.repository.save(subscription).then();
    }

}
