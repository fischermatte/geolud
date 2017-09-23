package org.fischermatte.icke.server;

import org.fischermatte.icke.api.IckeAPIPaths;
import org.fischermatte.icke.api.Project;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
public class ProjectControllerTest {

    @LocalServerPort
    private int port;

    @Test
    public void getAll() throws Exception {

        WebTestClient client = WebTestClient.bindToServer()
                .baseUrl("http://localhost:" + port)
                .build();

        client.get().uri(IckeAPIPaths.Projects.PATH).exchange()
                .expectStatus().isOk()
                .expectBody(Project[].class)
                .isEqualTo(new Project[]{
                        new Project().withId("1").withTitle("example project 1"),
                        new Project().withId("2").withTitle("example project 2")
                });


    }

}