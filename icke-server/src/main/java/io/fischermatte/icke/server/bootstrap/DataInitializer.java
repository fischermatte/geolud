package io.fischermatte.icke.server.bootstrap;

import io.fischermatte.icke.server.project.data.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.UUID;

import static java.util.Arrays.asList;

@Component
public class DataInitializer {
    private static final Logger LOG = LoggerFactory.getLogger(DataInitializer.class);

    private final ProjectRepository projectRepository;

    public DataInitializer(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public void intialize() {
        projectRepository.save(asList(
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
