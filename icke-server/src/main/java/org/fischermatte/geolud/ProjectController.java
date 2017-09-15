package org.fischermatte.icke;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import rx.Observable;

@RestController
public class ProjectController {
    @RestController
    public class RxJavaController {
        @RequestMapping(path = "/all", method = RequestMethod.GET)
        public Observable<String> handleMessage() {
            return Observable.just("Huhu");
        }
    }
}
