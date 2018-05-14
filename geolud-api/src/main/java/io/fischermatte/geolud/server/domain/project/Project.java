package io.fischermatte.geolud.server.domain.project;


import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;


public class Project {

    @Id
    private String id;

    private String title;

    private Interval interval;

    private String description;

    private Customer customer;

    private List<Link> links = new ArrayList<>();

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Interval getInterval() {
        return interval;
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
        this.interval = interval;
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
