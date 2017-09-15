package org.fischermatte.icke.server;

import org.fischermatte.icke.api.IckeAPIPaths;
import org.fischermatte.icke.api.Project;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(path = IckeAPIPaths.Projects.PATH, produces = APPLICATION_JSON_VALUE)
public class ProjectController {

    @RequestMapping(method = RequestMethod.GET)
    public Flux<Project> getAll() {
        return Flux.just(new Project()
                .withId("1")
                .withTitle("example project"));
    }

//
//    @RequestMapping(method = RequestMethod.GET)
//    public ResponseEntity<Project> getAll() {
//        return new ResponseEntity<Project>(new Project()
//                .withId("1")
//                .withTitle("example project"), HttpStatus.OK);
//    }
}
