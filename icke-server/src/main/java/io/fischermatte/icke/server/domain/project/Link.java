package io.fischermatte.icke.server.domain.project;

public class Link {
    private String title;
    private String url;

    public String getTitle() {
        return title;
    }

    public String getUrl() {
        return url;
    }

    public Link withTitle(String title) {
        this.title = title;
        return this;
    }

    public Link withUrl(String url) {
        this.url = url;
        return this;
    }
}
