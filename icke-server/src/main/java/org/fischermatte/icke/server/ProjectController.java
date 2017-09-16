package org.fischermatte.icke.server;

import io.reactivex.Observable;
import org.fischermatte.icke.api.IckeAPIPaths;
import org.fischermatte.icke.api.Project;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(path = IckeAPIPaths.Projects.PATH, produces = APPLICATION_JSON_VALUE)
public class ProjectController {

    @RequestMapping(method = RequestMethod.GET)
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
