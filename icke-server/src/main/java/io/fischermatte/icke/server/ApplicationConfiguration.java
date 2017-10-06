package io.fischermatte.icke.server;

import com.mongodb.MongoClient;
import cz.jirutka.spring.embedmongo.EmbeddedMongoFactoryBean;
import io.fischermatte.icke.server.project.data.CustomerData;
import io.fischermatte.icke.server.project.data.IntervalData;
import io.fischermatte.icke.server.project.data.ProjectData;
import io.fischermatte.icke.server.project.data.ProjectDataRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.SimpleAsyncTaskExecutor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.time.LocalDate;
import java.util.UUID;
import java.util.concurrent.Executor;

@EnableAsync
@Configuration
public class ApplicationConfiguration {
    private static final Logger LOG = LoggerFactory.getLogger(ApplicationConfiguration.class);

    @Autowired
    private ProjectDataRepository projectDataRepository;

    /**
     * Maps all AngularJS routes to index so that they work with direct linking.
     */
    @Controller
    static class Routes {

        @RequestMapping(value = {"/home", "/resume", "/projects", "/contact"})
        public String index() {
            return "forward:/index.html";
        }
    }

    /**
     * TaskExecutor so we can use @Async annotation. E.g. when sending emails.
     */
    @Bean
    public Executor taskExecutor() {
        return new SimpleAsyncTaskExecutor();
    }

    @Bean
    public MongoTemplate mongoTemplate() throws IOException {
        EmbeddedMongoFactoryBean mongo = new EmbeddedMongoFactoryBean();
        mongo.setBindIp("localhost");
        MongoClient mongoClient = mongo.getObject();
        return new MongoTemplate(mongoClient, "icke_db");
    }

    @PostConstruct
    public void populateProjects() {
        LOG.debug("inserting project data... ");
        projectDataRepository.save(new ProjectData()
                .withId(UUID.randomUUID().toString())
                .withTitle("Live Ticker Tour de France 2001")
                .withDescription("Flash-based Live Ticker for the Tour de France 2001. Real time stage tracking with maps and profiles.")
                .withCustomer(new CustomerData()
                        .withName("SPIEGEL-ONLINE")
                        .withUrl("http://www.spiegel.de/"))
                .withInterval(new IntervalData()
                        .withFrom(LocalDate.of(2001,1,1))
                        .withTo(LocalDate.of(2001,6,1))));
    }


}
