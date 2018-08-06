package io.fischermatte.geolud.server.notification;

import io.fischermatte.geolud.server.notification.repository.PushRegistration;
import io.fischermatte.geolud.server.notification.repository.PushRegistrationRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
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
public class PushRegistrationController {

    private final PushRegistrationRepository repository;

    public PushRegistrationController(PushRegistrationRepository repository) {
        this.repository = repository;
    }

    @ApiOperation(value = "Registers a client for push notification", nickname = "registerPush")
    @PostMapping(value = PUSH, consumes = {APPLICATION_JSON_VALUE})
    @ResponseStatus(CREATED)
    public Mono<Void> registerPush(@Valid @RequestBody PushRegistration registration) {
        return this.repository.save(registration).then();
    }

}
