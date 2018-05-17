package io.fischermatte.geolud.server;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import io.fischermatte.geolud.server.config.ApplicationConfig;
import io.fischermatte.geolud.server.domain.project.Project;
import io.fischermatte.geolud.server.repository.ProjectRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Example;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Arrays;

@Component
public class DataInitializer {
    private static final Logger LOG = LoggerFactory.getLogger(DataInitializer.class);

    private final ProjectRepository projectRepository;

    public DataInitializer(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Async
    public void insertProjectData() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setDateFormat(new SimpleDateFormat("YYYY-MM-dd"));
        objectMapper.registerModule(new JavaTimeModule());
        Project[] projects = objectMapper.readValue(ApplicationConfig.class.getResourceAsStream("/data/projects.json"), Project[].class);
        Arrays.stream(projects).forEach(project -> {
            projectRepository.exists(Example.of(project)).map(exists -> {
                if (exists) {
                    LOG.debug("project was already inserted: {}", project.getTitle());
                    return Mono.empty();
                }
                return projectRepository.save(project);
            });
        });


    }

}
