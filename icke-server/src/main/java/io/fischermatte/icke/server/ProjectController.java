package io.fischermatte.icke.server;


import io.fischermatte.icke.api.IckeAPIPaths;
import io.fischermatte.icke.api.Project;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static java.util.Arrays.asList;

@RestController
@RequestMapping(path = IckeAPIPaths.Projects.PATH)
public class ProjectController {

    @GetMapping
    @ResponseBody
    public List<Project> getAll() {
        return asList(
                new Project()
                        .withId("1")
                        .withTitle("example project 1"),
                new Project()
                        .withId("2")
                        .withTitle("example project 2"));
    }
}
