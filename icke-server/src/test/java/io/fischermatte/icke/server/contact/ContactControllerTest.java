package io.fischermatte.icke.server.contact;

import io.fischermatte.icke.api.model.ContactRequestDto;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@Ignore
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
public class ContactControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void submitContactRequest() throws Exception {
        ContactRequestDto contactRequest = new ContactRequestDto();
        contactRequest.setEmail("test@test.de");
        contactRequest.setName("John Do");
        contactRequest.setMessage("get in touch with me");

        ResponseEntity<Void> response = restTemplate.postForEntity("http://localhost:" + port + "/api/contact", contactRequest, Void.class);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
    }

}