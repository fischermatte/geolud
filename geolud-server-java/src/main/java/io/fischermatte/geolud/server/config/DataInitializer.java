package io.fischermatte.geolud.server.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import io.fischermatte.geolud.server.domain.project.Project;
import io.fischermatte.geolud.server.domain.project.ProjectRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Example;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.text.SimpleDateFormat;

import static java.util.Arrays.stream;
import static reactor.core.publisher.Mono.just;

@Component
public class DataInitializer {
    private static final Logger LOG = LoggerFactory.getLogger(DataInitializer.class);

    private final ProjectRepository projectRepository;

    public DataInitializer(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Async
    public void insertProjectData() throws IOException {
        var objectMapper = new ObjectMapper();
        objectMapper.setDateFormat(new SimpleDateFormat("YYYY-MM-dd"));
        objectMapper.registerModule(new JavaTimeModule());
        Project[] projects = objectMapper.readValue(ApplicationConfig.class.getResourceAsStream("/data/projects.json"), Project[].class);
        stream(projects)
                .forEach(project -> projectRepository
                        .exists(Example.of(project))
                        .flatMap(exists -> {
                            if (exists) {
                                LOG.debug("project was already inserted: {}", project.getTitle());
                                return just(project);
                            }
                            return projectRepository.save(project);
                        })
                        .then()
                        .block());


    }

}
