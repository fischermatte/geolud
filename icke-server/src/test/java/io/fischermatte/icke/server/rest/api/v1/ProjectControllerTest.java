package io.fischermatte.icke.server.rest.api.v1;

import io.fischermatte.icke.api.v1.model.ProjectDto;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static io.fischermatte.icke.server.rest.api.v1.ApiContext.API_BASE_PATH;
import static java.util.Arrays.asList;
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
        List<ProjectDto> projects = asList(restTemplate.getForObject("http://localhost:" + port + API_BASE_PATH + "/projects", ProjectDto[].class));
        assertNotNull(projects);
        assertEquals(23, projects.size());
    }

}