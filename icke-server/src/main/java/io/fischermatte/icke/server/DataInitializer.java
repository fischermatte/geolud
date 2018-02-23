package io.fischermatte.icke.server;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import io.fischermatte.icke.server.config.ApplicationConfiguration;
import io.fischermatte.icke.server.domain.project.Project;
import io.fischermatte.icke.server.repository.ProjectRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Arrays;

import static io.fischermatte.icke.server.repository.ProjectSpecifications.titleAndIntervalAreEqual;

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
        Project[] projects = objectMapper.readValue(ApplicationConfiguration.class.getResourceAsStream("/data/projects.json"), Project[].class);
        Arrays.stream(projects).forEach(project -> {
            if (!projectRepository.exists(titleAndIntervalAreEqual(project.getTitle(), project.getInterval()))) {
                projectRepository.save(project);
            } else {
                LOG.debug("project was already inserted: {}", project.getTitle());
            }
        });


    }

}
