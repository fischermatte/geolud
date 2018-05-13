package io.fischermatte.icke.server.config;

import com.mongodb.MongoClient;
import cz.jirutka.spring.embedmongo.EmbeddedMongoFactoryBean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.io.IOException;

@Profile("!cloud")
@Configuration
public class DataSourcConfig {
    private static final Logger LOG = LoggerFactory.getLogger(DataSourcConfig.class);

    @Bean
    public MongoTemplate mongoTemplate() throws IOException {
        LOG.info("connecting to local embedded mongo db...");
        EmbeddedMongoFactoryBean mongo = new EmbeddedMongoFactoryBean();
        mongo.setBindIp("localhost");
        MongoClient mongoClient = (MongoClient) mongo.getObject();
        MongoTemplate mongoTemplate = new MongoTemplate(mongoClient, "icke-db");
        return mongoTemplate;
    }
}
