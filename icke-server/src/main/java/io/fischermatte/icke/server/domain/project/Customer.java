package io.fischermatte.icke.server.domain.project;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Customer {

    @Column(name = "CUSTOMER_NAME")
    private String name;

    @Column(name = "CUSTOMER_URL")
    private String url;

    public String getName() {
        return name;
    }

    public String getUrl() {
        return url;
    }

    public Customer withUrl(String url) {
        this.url = url;
        return this;
    }

    public Customer withName(String name) {
        this.name = name;
        return this;
    }
}
