package io.fischermatte.geolud.server.contact;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;
import reactor.core.publisher.Mono;

import static io.fischermatte.geolud.server.config.ApiPaths.CONTACT;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;
import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
class ContactControllerTest {

    @Autowired
    private WebTestClient webTestClient;

    @Test
    void submitContactRequest() {
        ContactRequest contactRequest = new ContactRequest();
        contactRequest.setEmail("test@test.de");
        contactRequest.setName("John Do");
        contactRequest.setMessage("get in touch with me");

        webTestClient.post()
                .uri(CONTACT)
                .contentType(APPLICATION_JSON_UTF8)
                .accept(APPLICATION_JSON_UTF8)
                .body(Mono.just(contactRequest), ContactRequest.class)
                .exchange()
                .expectStatus().isCreated();
    }

}