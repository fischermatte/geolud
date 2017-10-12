package io.fischermatte.icke.server.domain.project;

public class Customer {
    private String name;
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
