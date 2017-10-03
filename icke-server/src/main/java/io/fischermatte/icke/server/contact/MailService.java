package io.fischermatte.icke.server.contact;

import io.fischermatte.icke.api.ContactRequest;
import org.apache.commons.lang.CharEncoding;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;

@Service
public class MailService {

    private static final Logger LOG = LoggerFactory.getLogger(MailService.class);
    private final JavaMailSender javaMailSender;
    private final String toEmailAddress;

    public MailService(JavaMailSender javaMailSender, @Value("${mail.to}") String toEmailAddress) {
        this.javaMailSender = javaMailSender;
        this.toEmailAddress = toEmailAddress;
    }

    @Async
    public void sendEmail(ContactRequest contactRequest) {
        LOG.debug("sending email from {} to {} ", contactRequest.getEmail(), toEmailAddress);
        // Prepare message using a Spring helper
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper message = new MimeMessageHelper(mimeMessage, false, CharEncoding.UTF_8);
            message.setTo(toEmailAddress);
            message.setFrom(contactRequest.getEmail());
            message.setSubject("Contact Request from your Icke-Site");
            message.setText(contactRequest.getMessage(), false);
            javaMailSender.send(mimeMessage);
            LOG.debug("Sent email from User '{}'", contactRequest.getEmail());
        } catch (Exception e) {
            LOG.error("Email could not be sent ", e);
        }
    }
}
