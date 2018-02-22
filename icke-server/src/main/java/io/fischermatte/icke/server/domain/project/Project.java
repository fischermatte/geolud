package io.fischermatte.icke.server.domain.project;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table
@Entity
public class Project {
    @Id
    @Column(length = 40)
    @GeneratedValue(generator = "randomId")
    @GenericGenerator(name = "randomId", strategy = "io.fischermatte.icke.server.domain.project.RandomIdGenerator")
    private String id;

    @Column(length = 1024)
    private String title;

    @Embedded
    private Interval interval;

    @Lob
    @Column
    private String description;

    @Embedded
    private Customer customer;

//    @BatchSize(size=100)
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "project")
    @Column
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
