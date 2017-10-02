package io.fischermatte.icke.server.contact;

import io.fischermatte.icke.api.ContactRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    private static final Logger LOG = LoggerFactory.getLogger(MailService.class);

    @Async
    public void sendEmail(ContactRequest contactRequest) {
        LOG.debug("sending email to {}", contactRequest.getEmail());
    }
}
