package io.fischermatte.geolud.server.rest.api.v1.contact;

import io.fischermatte.geolud.server.rest.api.v1.project.ErrorResponseDto;
import io.fischermatte.geolud.server.service.mail.MailService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

import static io.fischermatte.geolud.server.rest.api.v1.Paths.CONTACT;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

@Api(value = "contact", description = "the contact API")
@RestController
public class ContactController {

    private final MailService mailService;

    public ContactController(MailService mailService) {
        this.mailService = mailService;
    }

    @ApiOperation(value = "Submit a new contact Request", nickname = "submitContactRequest")
    @PostMapping(value = CONTACT, consumes = {APPLICATION_JSON_VALUE})
    @ResponseStatus(CREATED)
    public Mono<Void> submitContactRequest(@Valid @RequestBody ContactRequestDto contactRequest) {
        mailService.sendEmail("GEOLUD-SITE: Contact Request", contactRequest.getMessage(), contactRequest.getEmail());
        return Mono.empty();
    }
}
