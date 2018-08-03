package io.fischermatte.geolud.server.project.repository;

import java.time.LocalDate;

public class Interval {

    private LocalDate from;

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
