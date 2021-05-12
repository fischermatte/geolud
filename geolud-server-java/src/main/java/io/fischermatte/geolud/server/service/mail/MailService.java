package io.fischermatte.geolud.server.service.mail;

import io.fischermatte.geolud.server.config.MailProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;
import java.nio.charset.StandardCharsets;

@Service
public class MailService {

    private static final Logger LOG = LoggerFactory.getLogger(MailService.class);

    private final JavaMailSender javaMailSender;
    private final MailProperties mailProperties;
    private final ApplicationContext ctx;

    public MailService(JavaMailSender javaMailSender, MailProperties mailProperties, ApplicationContext ctx) {
        this.javaMailSender = javaMailSender;
        this.mailProperties = mailProperties;
        this.ctx = ctx;
    }

    public void sendEmail(String subject, String text) {
        ctx.getBean(MailService.class).sendEmail(subject, text, mailProperties.getTo(), mailProperties.getTo());
    }

    public void sendEmail(String subject, String text, String from) {
        ctx.getBean(MailService.class).sendEmail(subject, text, from, mailProperties.getTo());
    }

    @Async
    public void sendEmail(String subject, String text, String from, String to) {
        LOG.debug("sending email from {} to {} ", from, to);
        // Prepare message using a Spring helper
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper message = new MimeMessageHelper(mimeMessage, false, StandardCharsets.UTF_8.name());
            message.setTo(to);
            message.setFrom(from);
            message.setSubject(subject);
            message.setText(text, false);
            javaMailSender.send(mimeMessage);
            LOG.debug("Sent email from User '{}'", from);
        } catch (Exception e) {
            LOG.error("Email could not be sent ", e);
        }
    }
}
