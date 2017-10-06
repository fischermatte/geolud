package io.fischermatte.icke.server.project.data;

import org.springframework.data.annotation.Id;

public class ProjectData {
    @Id
    private String id;

    private String title;

    private IntervalData interval;

    private String description;

    private CustomerData customer;

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public IntervalData getInterval() {
        return interval;
    }

    public String getDescription() {
        return description;
    }

    public CustomerData getCustomer() {
        return customer;
    }

    public ProjectData withId(String id) {
        this.id = id;
        return this;
    }

    public ProjectData withTitle(String title) {
        this.title = title;
        return this;
    }

    public ProjectData withInterval(IntervalData interval) {
        this.interval = interval;
        return this;
    }

    public ProjectData withCustomer(CustomerData customer) {
        this.customer = customer;
        return this;
    }

    public ProjectData withDescription(String description) {
        this.description = description;
        return this;
    }
}
