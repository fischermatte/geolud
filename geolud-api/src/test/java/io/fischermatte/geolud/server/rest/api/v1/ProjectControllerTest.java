package io.fischermatte.geolud.server.rest.api.v1;

import io.fischermatte.geolud.api.v1.model.ProjectDto;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static io.fischermatte.geolud.server.rest.api.v1.ApiContext.API_V1_BASE_PATH;
import static java.util.Arrays.asList;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
class ProjectControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void getAll() {
        List<ProjectDto> projects = asList(restTemplate.getForObject("http://localhost:" + port + API_V1_BASE_PATH + "/projects", ProjectDto[].class));
        assertNotNull(projects);
        assertEquals(24, projects.size());
    }

}