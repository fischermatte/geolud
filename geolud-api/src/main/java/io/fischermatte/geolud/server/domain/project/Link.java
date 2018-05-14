package io.fischermatte.geolud.server.domain.project;

import java.io.Serializable;
import java.util.Objects;

public class Link implements Serializable {

    private String title;

    private String url;

    public String getTitle() {
        return title;
    }

    public String getUrl() {
        return url;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Link link = (Link) o;
        return Objects.equals(title, link.title) &&
                Objects.equals(url, link.url);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, url);
    }

}