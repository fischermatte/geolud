package io.fischermatte.icke.server.config;

import org.springframework.cloud.config.java.AbstractCloudConfig;
import org.springframework.cloud.service.PooledServiceConnectorConfig;
import org.springframework.cloud.service.relational.DataSourceConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;

@Configuration
@Profile({"cloud"})
public class CloudDataSourceConfig extends AbstractCloudConfig {

    @Bean
    public DataSource dataSource() {
        // FAB put in for pooling (min=5,max=30,wait=3000)
        PooledServiceConnectorConfig.PoolConfig poolConfig = new PooledServiceConnectorConfig.PoolConfig(1, 5, 3000);
        DataSourceConfig dataSourceConfig = new DataSourceConfig(poolConfig, null);
        return connectionFactory().dataSource(dataSourceConfig);
    }

//    @Bean
//    public DataSource dataSource(@Value("${application.cloud.datasource.uri}") String uri) {
//        // Note: lookup via connectionFactory().dataSource(); did not work with elephant sql on ibm bluemix
//        PostgresqlServiceInfo serviceInfo = new PostgresqlServiceInfo("geolud-db", uri);
//        BasicDataSource dataSource = new BasicDataSource();
//        dataSource.setUrl(serviceInfo.getJdbcUrl() );
//        dataSource.setDriverClassName("org.postgresql.Driver");
//        dataSource.setUsername(serviceInfo.getUserName());
//        dataSource.setPassword(serviceInfo.getPassword());
//        return dataSource;
//
//    }

}
