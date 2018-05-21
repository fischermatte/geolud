package io.fischermatte.geolud.server.rest.api.v1;

import io.fischermatte.geolud.server.rest.api.v1.project.ProjectDto;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;

import static io.fischermatte.geolud.server.rest.api.v1.ApiContext.API_V1_BASE_PATH;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
class ProjectControllerTest {

    @Autowired
    private WebTestClient webTestClient;

    @Test
    void getAll() {
        webTestClient.get().uri(API_V1_BASE_PATH + "/projects")
                .accept(MediaType.APPLICATION_JSON_UTF8)
                .exchange()
                .expectStatus().isOk()
                .expectHeader().contentType(MediaType.APPLICATION_JSON_UTF8)
                .expectBodyList(ProjectDto.class)
                .hasSize(24);
    }

}