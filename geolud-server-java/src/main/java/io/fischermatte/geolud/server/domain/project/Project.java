package io.fischermatte.geolud.server.domain.project;


import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;


public class Project {

    @Id
    private String id;

    private String title;

    private Interval period;

    private String description;

    private Customer customer;

    private List<Link> links = new ArrayList<>();

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Interval getPeriod() {
        return period;
    }

    public String getDescription() {
        return description;
    }

    public Customer getCustomer() {
        return customer;
    }

    public List<Link> getLinks() {
        return links;
    }

    public Project withId(String id) {
        this.id = id;
        return this;
    }

    public Project withTitle(String title) {
        this.title = title;
        return this;
    }

    public Project withInterval(Interval interval) {
        this.period = interval;
        return this;
    }

    public Project withCustomer(Customer customer) {
        this.customer = customer;
        return this;
    }

    public Project withDescription(String description) {
        this.description = description;
        return this;
    }

    public Project withLink(Link link) {
        this.links.add(link);
        return this;
    }
}
