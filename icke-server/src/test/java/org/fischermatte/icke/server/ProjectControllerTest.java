package org.fischermatte.icke.server;

import org.fischermatte.icke.api.IckeAPIPaths;
import org.fischermatte.icke.api.Project;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import static org.junit.Assert.assertNotNull;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
public class ProjectControllerTest {

    @LocalServerPort
    private int port;

    private TestRestTemplate restTemplate = new TestRestTemplate();

    @Test
    public void getAll() throws Exception {

        WebClient webClient = WebClient.create();

        Flux<Project> projects = webClient.get()
                .uri("http://localhost:" + port + IckeAPIPaths.Projects.PATH)
                .accept(MediaType.APPLICATION_JSON)
                .exchange()
                .flatMapMany(response -> response.bodyToFlux(Project.class))
                .log();
        assertNotNull(projects);
        projects.subscribe(project -> {
            System.out.println(project.toString());
        });

    }

}