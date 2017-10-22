package io.fischermatte.icke.server;

import io.fischermatte.icke.server.domain.project.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.SimpleAsyncTaskExecutor;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.Executor;

import static java.util.Arrays.asList;

@EnableAsync
@Configuration
public class ApplicationConfiguration {
    private static final Logger LOG = LoggerFactory.getLogger(ApplicationConfiguration.class);

    /**
     * TaskExecutor so we can use @Async annotation. E.g. when sending emails.
     */
    @Bean
    public Executor taskExecutor() {
        return new SimpleAsyncTaskExecutor();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedOrigins("*")
                        .allowedMethods("*");
            }
        };
    }


    @Bean
    public ProjectRepository projectRepository() {
        return new ProjectRepository() {
            private List<Project> projects = new ArrayList<>();

            @Override
            public Project findOne(UUID projectId) {
                return this.projects.stream().filter(project -> project.getId().equals(projectId))
                        .findFirst().orElse(null);
            }

            @Override
            public List<Project> findAll() {
//                return projects;
                throw new IllegalArgumentException("fasd");
            }

            @Override
            public void save(List<Project> projects) {
                this.projects = projects;
            }
        };
    }

    @PostConstruct
    public void onInit() {
        LOG.info("inserting test data... ");
        loadTestData();
    }

    private void loadTestData() {
        projectRepository().save(asList(
                new Project()
                        .withId(UUID.randomUUID())
                        .withTitle("Online XML/Flash-based map for www.russlandpartner.de")
                        .withDescription("A Flash-based map with information about Russian-German town twinning. Used technologies: XML, Adobe Flash, ActionScript.")
                        .withCustomer(new Customer()
                                .withName("Deutsch-Russische Forum e.V.")
                                .withUrl("http://www.deutsch-russisches-forum.de/"))
                        .withInterval(new Interval()
                                .withFrom(LocalDate.of(2004, 1, 1))
                                .withTo(LocalDate.of(2004, 1, 1)))
                        .withLink(new Link().withTitle("screenshot 1").withUrl("assets/projects/twin/screenshot_germany.png"))
                        .withLink(new Link().withTitle("screenshot 2").withUrl("assets/projects/twin/screenshot_germany.png")),
                new Project()
                        .withId(UUID.randomUUID())
                        .withTitle("Live Ticker Tour de France 2001")
                        .withDescription("Flash-based Live Ticker for the Tour de France 2001. Real time stage tracking with maps and profiles.")
                        .withCustomer(new Customer()
                                .withName("SPIEGEL-ONLINE")
                                .withUrl("http://www.spiegel.de/"))
                        .withInterval(new Interval()
                                .withFrom(LocalDate.of(2001, 1, 1))
                                .withTo(LocalDate.of(2001, 1, 1)))
                        .withLink(new Link().withTitle("screenshot 1").withUrl("assets/projects/tour/tour_screenshot_overview.png"))
                        .withLink(new Link().withTitle("screenshot 2").withUrl("assets/projects/tour/tour_screenshot_etappe.png")))
        );
    }


}
