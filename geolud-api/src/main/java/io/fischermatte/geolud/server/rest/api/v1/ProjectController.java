package io.fischermatte.geolud.server.rest.api.v1;


import io.fischermatte.geolud.api.v1.ProjectsApi;
import io.fischermatte.geolud.api.v1.model.CustomerDto;
import io.fischermatte.geolud.api.v1.model.LinkDto;
import io.fischermatte.geolud.api.v1.model.ProjectDto;
import io.fischermatte.geolud.server.domain.project.Customer;
import io.fischermatte.geolud.server.domain.project.Interval;
import io.fischermatte.geolud.server.domain.project.Link;
import io.fischermatte.geolud.server.domain.project.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static io.fischermatte.geolud.server.rest.api.v1.ApiContext.API_V1_BASE_PATH;
import static java.util.Collections.emptyList;
import static org.springframework.util.CollectionUtils.isEmpty;
import static org.springframework.util.StringUtils.hasText;

@RestController
@RequestMapping(value = API_V1_BASE_PATH)
public class ProjectController implements ProjectsApi {

    private final CrudRepository<Project, String> projectRepository;

    public ProjectController(CrudRepository<Project, String> projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public ResponseEntity<ProjectDto> getProjectById(@PathVariable String projectId) {
        Optional<Project> result = projectRepository.findById(projectId);
        if (!result.isPresent()) {
            throw new IllegalArgumentException("project not found for id ");
        }
        return new ResponseEntity<>(mapProject(result.get()), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<ProjectDto>> getProjects(@RequestParam(required = false) Integer limit) {
        return new ResponseEntity<>(mapProjects(projectRepository.findAll()), HttpStatus.OK);
    }

    private List<ProjectDto> mapProjects(Iterable<Project> source) {
        if (source == null) {
            return emptyList();
        }
        List<ProjectDto> target = new ArrayList<>();
        source.forEach(project -> target.add(mapProject(project)));
        return target;
    }

    private ProjectDto mapProject(Project source) {
        ProjectDto target = new ProjectDto();
        target.setId(source.getId());
        target.setDescription(source.getDescription());
        target.setTitle(source.getTitle());
        target.setCustomer(mapCustomer(source.getCustomer()));
        target.setPeriod(mapInterval(source.getInterval()));
        target.setLinks(mapLinks(source.getLinks()));
        return target;
    }

    private List<LinkDto> mapLinks(List<Link> source) {
        if (isEmpty(source)) {
            return emptyList();
        }
        List<LinkDto> target = new ArrayList<>();
        for (Link link : source) {
            target.add(mapLink(link));
        }
        return target;
    }

    private LinkDto mapLink(Link source) {
        LinkDto target = new LinkDto();
        target.setTitle(source.getTitle());
        target.setUrl(source.getUrl());
        return target;
    }

    private String mapInterval(Interval interval) {
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

    private CustomerDto mapCustomer(Customer source) {
        CustomerDto target = new CustomerDto();
        target.setName(source.getName());
        target.setUrl(source.getUrl());
        return target;

    }
}

