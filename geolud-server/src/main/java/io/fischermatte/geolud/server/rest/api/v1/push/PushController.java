package io.fischermatte.geolud.server.rest.api.v1.push;

import io.fischermatte.geolud.server.domain.push.PushRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

import static io.fischermatte.geolud.server.rest.api.v1.Paths.CONTACT;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

@Api(value = "push", description = "registers a client for push notifications")
@RestController
public class PushController {

    private final PushRepository pushRepository;

    public PushController(PushRepository pushRepository) {
        this.pushRepository = pushRepository;
    }

    @ApiOperation(value = "Registers a PushSubscription", nickname = "registerPushSubscription")
    @PostMapping(value = CONTACT, consumes = {APPLICATION_JSON_VALUE})
    @ResponseStatus(CREATED)
    public Mono<Void> registerPushSubscription(@Valid @RequestBody PushRegistrationDto contactRequest) {
        return Mono.empty();
    }
}
