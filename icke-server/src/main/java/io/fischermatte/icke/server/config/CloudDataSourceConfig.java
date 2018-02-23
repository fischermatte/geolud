package io.fischermatte.icke.server.config;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.service.common.PostgresqlServiceInfo;
import org.springframework.cloud.util.StandardUriInfoFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;

@Configuration
@Profile({"cloud"})
public class CloudDataSourceConfig {

    private StandardUriInfoFactory uriInfoFactory = new StandardUriInfoFactory();

    @Bean
    public DataSource dataSource(@Value("${application.cloud.datasource.uri}") String uri) {
        // Note: lookup via connectionFactory().dataSource(); did not work with elephant sql on ibm bluemix
        PostgresqlServiceInfo serviceInfo = new PostgresqlServiceInfo("geolud-db", uri);
        BasicDataSource dataSource = new BasicDataSource();
        dataSource.setUrl(serviceInfo.getJdbcUrl() );
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUsername(serviceInfo.getUserName());
        dataSource.setPassword(serviceInfo.getPassword());
        return dataSource;

    }
//
//    public static void main (String[] args) {
//        PostgresqlServiceInfo serviceInfo = new PostgresqlServiceInfo("geolud-db", "postgres://kigxjalj:hR5uH3L6I7FPTlzfoA3vl9SKnFjEN74n@hanno-01.db.elephantsql.com:5432/kigxjalj");
//    }

}
