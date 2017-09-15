package org.fischermatte.icke;

import org.fischermatte.icke.api.Project;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import rx.Observable;

@RestController
@RequestMapping(path = "/api/projects")
public class ProjectController {

    @RequestMapping(path = "/all", method = RequestMethod.GET)
    public Observable<Project> getAll() {
        return Observable.just(new Project().withTitle("example project"));
    }
}
