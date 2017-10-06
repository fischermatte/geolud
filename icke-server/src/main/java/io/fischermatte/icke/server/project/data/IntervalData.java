package io.fischermatte.icke.server.project.data;

import java.time.LocalDate;

public class IntervalData {

    private LocalDate from;
    private LocalDate to;

    public LocalDate getFrom() {
        return from;
    }

    public LocalDate getTo() {
        return to;
    }

    public IntervalData withFrom(LocalDate from) {
        this.from = from;
        return this;
    }

    public IntervalData withTo(LocalDate to) {
        this.to = to;
        return this;
    }
}
