package io.fischermatte.geolud.server.rest.api.v1.project;


import io.fischermatte.geolud.server.domain.project.Customer;
import io.fischermatte.geolud.server.domain.project.Interval;
import io.fischermatte.geolud.server.domain.project.Link;
import io.fischermatte.geolud.server.domain.project.Project;
import io.fischermatte.geolud.server.repository.ProjectRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;

import static io.fischermatte.geolud.server.rest.api.v1.ApiContext.API_V1_BASE_PATH;
import static java.util.Collections.emptyList;
import static org.springframework.util.CollectionUtils.isEmpty;
import static org.springframework.util.StringUtils.hasText;

@Api(value = "projects", description = "the projects API")
@RestController
@RequestMapping(value = API_V1_BASE_PATH)
public class ProjectController {

    private final ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @ApiOperation(value = "Info for a specific project", nickname = "getProjectById", notes = "", response = ProjectDto.class, tags = {"project",})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Expected response to a valid request", response = ProjectDto.class),
            @ApiResponse(code = 200, message = "unexpected error", response = ErrorResponseDto.class)})
    @RequestMapping(value = "/projects/{projectId}",
            produces = {"application/json"},
            method = RequestMethod.GET)
    public Mono<ProjectDto> getProjectById(@PathVariable String projectId) {
        return projectRepository.findById(projectId).map(this::mapProject);
    }

    @ApiOperation(value = "List all projects", nickname = "getProjects", notes = "", response = ProjectDto.class, responseContainer = "List", tags = {"project",})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "An paged array of projects", response = ProjectDto.class, responseContainer = "List"),
            @ApiResponse(code = 200, message = "unexpected error", response = ErrorResponseDto.class)})
    @RequestMapping(value = "/projects",
            produces = {"application/json"},
            method = RequestMethod.GET)
    public Flux<ProjectDto> getProjects(@RequestParam(required = false) Integer limit) {
        return projectRepository.findAll().map(this::mapProject);
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

