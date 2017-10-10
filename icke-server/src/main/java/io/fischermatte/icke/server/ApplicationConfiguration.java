package io.fischermatte.icke.server;

import com.mongodb.MongoClient;
import cz.jirutka.spring.embedmongo.EmbeddedMongoFactoryBean;
import io.fischermatte.icke.server.configuration.WebConfiguration;
import io.fischermatte.icke.server.project.data.Customer;
import io.fischermatte.icke.server.project.data.Interval;
import io.fischermatte.icke.server.project.data.Project;
import io.fischermatte.icke.server.project.data.ProjectRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.core.task.SimpleAsyncTaskExecutor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.scheduling.annotation.EnableAsync;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.time.LocalDate;
import java.util.UUID;
import java.util.concurrent.Executor;

@EnableAsync
@Configuration
@Import(WebConfiguration.class)
public class ApplicationConfiguration {
    private static final Logger LOG = LoggerFactory.getLogger(ApplicationConfiguration.class);

    @Autowired
    private ProjectRepository projectRepository;

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
        LOG.info("inserting project data... ");
        projectRepository.save(new Project()
                .withId(UUID.randomUUID())
                .withTitle("Live Ticker Tour de France 2001")
                .withDescription("Flash-based Live Ticker for the Tour de France 2001. Real time stage tracking with maps and profiles.")
                .withCustomer(new Customer()
                        .withName("SPIEGEL-ONLINE")
                        .withUrl("http://www.spiegel.de/"))
                .withInterval(new Interval()
                        .withFrom(LocalDate.of(2001, 1, 1))
                        .withTo(LocalDate.of(2001, 6, 1))));
    }


}
