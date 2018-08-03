package io.fischermatte.geolud.server.project;

import io.fischermatte.geolud.server.project.ProjectDto;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;

import static io.fischermatte.geolud.server.config.ApiPaths.PROJECTS;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;
import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
class ProjectControllerTest {

    @Autowired
    private WebTestClient webTestClient;

    @Test
    void getAll() {
        webTestClient.get().uri(PROJECTS)
                .accept(APPLICATION_JSON_UTF8)
                .exchange()
                .expectStatus().isOk()
                .expectHeader().contentType(APPLICATION_JSON_UTF8)
                .expectBodyList(ProjectDto.class)
                .hasSize(24);
    }

}