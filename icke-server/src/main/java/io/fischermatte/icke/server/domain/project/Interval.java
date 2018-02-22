package io.fischermatte.icke.server.domain.project;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.time.LocalDate;

@Embeddable
public class Interval {

    @Column(name = "INTERVAL_FROM")
    private LocalDate from;

    @Column(name = "INTERVAL_TO")
    private LocalDate to;

    public LocalDate getFrom() {
        return from;
    }

    public LocalDate getTo() {
        return to;
    }

    public Interval withFrom(LocalDate from) {
        this.from = from;
        return this;
    }

    public Interval withTo(LocalDate to) {
        this.to = to;
        return this;
    }
}
