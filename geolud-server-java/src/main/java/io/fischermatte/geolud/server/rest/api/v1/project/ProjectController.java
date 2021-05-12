package io.fischermatte.geolud.server.rest.api.v1.project;


import static io.fischermatte.geolud.server.rest.api.v1.Paths.PROJECT;
import static io.fischermatte.geolud.server.rest.api.v1.Paths.PROJECTS;
import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.fischermatte.geolud.server.domain.project.Project;
import io.fischermatte.geolud.server.domain.project.ProjectRepository;
import io.fischermatte.geolud.server.rest.api.v1.ErrorResponseDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Api(value = "projects")
@RestController
public class ProjectController {

    private final ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @ApiOperation(value = "Info for a specific project", nickname = "getProjectById", response = Project.class, tags = {"project",})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Expected response to a valid request", response = Project.class),
            @ApiResponse(code = 200, message = "unexpected error", response = ErrorResponseDto.class)})
    @GetMapping(value = PROJECT, produces = {APPLICATION_JSON_VALUE})
    public Mono<Project> getProjectById(@PathVariable String projectId) {
        return projectRepository.findById(projectId);
    }

    @ApiOperation(value = "List all projects", nickname = "getProjects", notes = "", response = Project.class, responseContainer = "List", tags = {"project",})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "An paged array of projects", response = Project.class, responseContainer = "List"),
            @ApiResponse(code = 200, message = "unexpected error", response = ErrorResponseDto.class)})
    @GetMapping(value = PROJECTS, produces = {APPLICATION_JSON_VALUE})
    public Flux<Project> getProjects(@RequestParam(required = false) Integer limit) {
        return projectRepository.findAll();
    }
}

