package org.fischermatte.icke.server;

import io.reactivex.Observable;
import org.fischermatte.icke.api.IckeAPIPaths;
import org.fischermatte.icke.api.Project;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = IckeAPIPaths.Projects.PATH)
public class ProjectController {

    @GetMapping
    public Observable<Project> getAll() {
        return Observable.just(
                new Project()
                        .withId("1")
                        .withTitle("example project 1"),
                new Project()
                        .withId("2")
                        .withTitle("example project 2"));
    }
}
