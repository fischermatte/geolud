package io.fischermatte.icke.server.domain.project;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Table
@Entity
public class Link implements Serializable {

    @Id
    @ManyToOne
    @JoinColumn(nullable = false)
    private Project project;

    @Id
    @Column(length = 1024)
    private String title;

    @Id
    @Column(length = 1024)
    private String url;

    public String getTitle() {
        return title;
    }

    public String getUrl() {
        return url;
    }

    // FIXME -> used for data import only, should be removed
    public void setProject(Project project) {
        this.project = project;
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