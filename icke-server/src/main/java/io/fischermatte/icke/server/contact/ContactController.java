package io.fischermatte.icke.server.contact;

import io.fischermatte.icke.api.ContactApi;
import io.fischermatte.icke.api.model.ContactRequestDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/api/v1")
public class ContactController implements ContactApi {

    private final MailService mailService;

    public ContactController(MailService mailService) {
        this.mailService = mailService;
    }

    @Override
    public ResponseEntity<Void> submitContactRequest(@Valid ContactRequestDto contactRequest) {
        mailService.sendEmail(contactRequest);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
