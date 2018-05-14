package io.fischermatte.geolud.server.rest.api.v1;

import io.fischermatte.geolud.api.v1.model.ContactRequestDto;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static io.fischermatte.geolud.server.rest.api.v1.ApiContext.API_V1_BASE_PATH;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
class ContactControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void submitContactRequest() {
        ContactRequestDto contactRequest = new ContactRequestDto();
        contactRequest.setEmail("test@test.de");
        contactRequest.setName("John Do");
        contactRequest.setMessage("get in touch with me");

        ResponseEntity<Void> response = restTemplate.postForEntity("http://localhost:" + port + API_V1_BASE_PATH + "/contact", contactRequest, Void.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

}