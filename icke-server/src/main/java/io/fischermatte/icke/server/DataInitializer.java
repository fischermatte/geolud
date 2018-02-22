package io.fischermatte.icke.server;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import io.fischermatte.icke.server.config.ApplicationConfiguration;
import io.fischermatte.icke.server.domain.project.Link;
import io.fischermatte.icke.server.domain.project.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Arrays;

import static java.util.Arrays.asList;

@Component
public class DataInitializer {

    private final CrudRepository<Project, String> projectRepository;

    public DataInitializer(CrudRepository<Project, String> projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Async
    public void insertProjectData() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setDateFormat(new SimpleDateFormat("YYYY-MM-dd"));
        objectMapper.registerModule(new JavaTimeModule());
        Project[] projects = objectMapper.readValue(ApplicationConfiguration.class.getResourceAsStream("/data/projects.json"), Project[].class);
        Arrays.stream(projects).forEach(project -> {
            for (Link link : project.getLinks()) {
                link.setProject(project);
            }
        });
        projectRepository.saveAll(asList(projects));
    }
}
