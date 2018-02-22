package io.fischermatte.icke.server;

import com.cloudant.client.api.CloudantClient;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import io.fischermatte.icke.server.config.ApplicationConfiguration;
import io.fischermatte.icke.server.domain.project.Project;
import io.fischermatte.icke.server.domain.project.ProjectRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.UUID;

import static java.util.Arrays.asList;

@Component
public class DataInitializer {

    private final ProjectRepository projectRepository;
    private final CloudantClient client;

    public DataInitializer(ProjectRepository projectRepository, CloudantClient client) {
        this.projectRepository = projectRepository;
        this.client = client;
    }

    @Async
    public void insertProjectData() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setDateFormat(new SimpleDateFormat("YYYY-MM-dd"));
        objectMapper.registerModule(new JavaTimeModule());
        Project[] projects = objectMapper.readValue(ApplicationConfiguration.class.getResourceAsStream("/data/projects.json"), Project[].class);
        Arrays.stream(projects).forEach(project -> project.withId(UUID.randomUUID()));
        projectRepository.save(asList(projects));
    }
}
