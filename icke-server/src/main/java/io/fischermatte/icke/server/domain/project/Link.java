package io.fischermatte.icke.server.domain.project;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class Link implements Serializable {

    @Column(length = 1024)
    private String title;

    @Column(length = 1024)
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