package io.fischermatte.icke.server;

import com.mongodb.MongoClient;
import cz.jirutka.spring.embedmongo.EmbeddedMongoFactoryBean;
import io.fischermatte.icke.server.bootstrap.DataInitializer;
import io.fischermatte.icke.server.configuration.WebConfiguration;
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
import java.util.concurrent.Executor;

@EnableAsync
@Configuration
@Import(WebConfiguration.class)
public class ApplicationConfiguration {
    private static final Logger LOG = LoggerFactory.getLogger(ApplicationConfiguration.class);

    @Autowired
    private DataInitializer dataInitializer;

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
    public void onInit() {
        LOG.info("inserting test data... ");
        dataInitializer.intialize();
    }


}
