package io.fischermatte.geolud.server.rest.api.v1;

import io.fischermatte.geolud.api.v1.ContactApi;
import io.fischermatte.geolud.api.v1.model.ContactRequestDto;
import io.fischermatte.geolud.server.service.mail.MailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import static io.fischermatte.geolud.server.rest.api.v1.ApiContext.API_V1_BASE_PATH;

@RestController
@RequestMapping(value = API_V1_BASE_PATH)
public class ContactController implements ContactApi {

    private final MailService mailService;

    public ContactController(MailService mailService) {
        this.mailService = mailService;
    }

    @Override
    public ResponseEntity<Void> submitContactRequest(@Valid @RequestBody ContactRequestDto contactRequest) {
        mailService.sendEmail(contactRequest);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
