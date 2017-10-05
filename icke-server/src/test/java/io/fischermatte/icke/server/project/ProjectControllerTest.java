package io.fischermatte.icke.server.project;

import io.fischermatte.icke.api.IckeAPIPaths;
import io.fischermatte.icke.api.Project;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
public class ProjectControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;


    @Test
    public void getAll() throws Exception {
        Project[] projects = restTemplate.getForObject("http://localhost:" + port + "/" + IckeAPIPaths.Projects.PATH, Project[].class);
        assertNotNull(projects);
        assertEquals(2,projects.length);


    }

}