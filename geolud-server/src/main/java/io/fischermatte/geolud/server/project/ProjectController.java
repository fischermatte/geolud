package io.fischermatte.geolud.server.project;


import io.fischermatte.geolud.server.project.repository.Project;
import io.fischermatte.geolud.server.project.repository.ProjectRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import static io.fischermatte.geolud.server.config.ApiPaths.PROJECT;
import static io.fischermatte.geolud.server.config.ApiPaths.PROJECTS;
import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

@Api(value = "projects", description = "the projects API")
@RestController
public class ProjectController {

    private final ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @ApiOperation(value = "Info for a specific project", nickname = "getProjectById", response = Project.class)
    @GetMapping(value = PROJECT, produces = {APPLICATION_JSON_VALUE})
    public Mono<Project> getProjectById(@PathVariable String projectId) {
        return projectRepository.findById(projectId);
    }

    @ApiOperation(value = "List all projects", nickname = "getProjects", response = Project.class, responseContainer = "List")
    @GetMapping(value = PROJECTS, produces = {APPLICATION_JSON_VALUE})
    public Flux<Project> getProjects(@RequestParam(required = false) Integer limit) {
        return projectRepository.findAll();
    }

}

