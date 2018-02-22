package io.fischermatte.icke.server.config.data;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;

@Configuration
@Profile("postgres-local")
public class PostgresLocalDataSourceConfig implements ExternalDataSourceConfig {

    @Bean
    public DataSource dataSource() {
        BasicDataSource dataSource = new BasicDataSource();
        dataSource.setUrl("jdbc:postgresql://localhost:5432/icke");
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUsername("icke");
        dataSource.setPassword("icke");
        return dataSource;
    }

}
