package io.fischermatte.icke.server.project.data;

public class CustomerData {
    private String name;
    private String url;

    public String getName() {
        return name;
    }

    public String getUrl() {
        return url;
    }

    public CustomerData withUrl(String url) {
        this.url = url;
        return this;
    }
    public CustomerData withName(String name) {
        this.name = name;
        return this;
    }
}
