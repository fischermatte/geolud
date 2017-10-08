package io.fischermatte.icke.server.project;


import io.fischermatte.icke.api.ProjectsApi;
import io.fischermatte.icke.api.model.CustomerDto;
import io.fischermatte.icke.api.model.ProjectDto;
import io.fischermatte.icke.server.project.data.Customer;
import io.fischermatte.icke.server.project.data.Interval;
import io.fischermatte.icke.server.project.data.Project;
import io.fischermatte.icke.server.project.data.ProjectRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static java.util.Collections.emptyList;
import static org.springframework.util.CollectionUtils.isEmpty;
import static org.springframework.util.StringUtils.hasText;

@RestController
public class ProjectController implements ProjectsApi {

    private final ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public ResponseEntity<ProjectDto> getProjectById(UUID projectId) {
        return new ResponseEntity<>(toDto(projectRepository.findOne(projectId)), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<ProjectDto>> getProjects(Integer limit) {
        return new ResponseEntity<>(toDto(projectRepository.findAll()), HttpStatus.OK);
    }

    private List<ProjectDto> toDto(List<Project> source) {
        if (isEmpty(source)) {
            return emptyList();
        }
        List<ProjectDto> target = new ArrayList<>();
        source.forEach(project -> target.add(toDto(project)));
        return target;
    }

    private ProjectDto toDto(Project source) {
        ProjectDto target = new ProjectDto();
        target.setId(source.getId());
        target.setTitle(source.getTitle());
        target.setCustomer(toDto(source.getCustomer()));
        target.setPeriod(toPeriod(source.getInterval()));
        return target;
    }

    private String toPeriod(Interval interval) {
        if (interval == null) {
            return null;
        }
        String period = "";
        if (interval.getFrom() != null) {
            period = String.valueOf(interval.getFrom().getYear());
        }
        if (interval.getTo() != null) {
            String to = String.valueOf(interval.getTo().getYear());
            if (!to.equals(period)) {
                if (hasText(period)) {
                    period += "-";
                }
                period += to;
            }
        }
        return period;
    }

    private CustomerDto toDto(Customer source) {
        CustomerDto target = new CustomerDto();
        target.setName(source.getName());
        target.setUrl(source.getUrl());
        return target;

    }
}
