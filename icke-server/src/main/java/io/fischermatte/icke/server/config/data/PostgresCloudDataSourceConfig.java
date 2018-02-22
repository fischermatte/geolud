package io.fischermatte.icke.server.config.data;

import org.springframework.cloud.config.java.AbstractCloudConfig;
import org.springframework.cloud.service.PooledServiceConnectorConfig.PoolConfig;
import org.springframework.cloud.service.relational.DataSourceConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;

// FAB added for pooling

@Configuration
@Profile({"postgres-cloud"})
public class PostgresCloudDataSourceConfig extends AbstractCloudConfig implements ExternalDataSourceConfig {

    @Bean
    public DataSource dataSource() {
        // FAB put in for pooling (min=5,max=30,wait=3000)
        PoolConfig poolConfig = new PoolConfig(5, 30, 3000);
        DataSourceConfig dataSourceConfig = new DataSourceConfig(poolConfig, null);
        return connectionFactory().dataSource(dataSourceConfig);
    }

}
