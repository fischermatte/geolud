package io.fischermatte.icke.server.contact;

import io.fischermatte.icke.api.model.ContactRequestDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(path = "", consumes = APPLICATION_JSON_VALUE)
public class ContactController {

    private final MailService mailService;

    public ContactController(MailService mailService) {
        this.mailService = mailService;
    }

    @PostMapping
    public ResponseEntity<Void> submitContactRequest(@Valid @RequestBody ContactRequestDto contactRequest) {
        mailService.sendEmail(contactRequest);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
