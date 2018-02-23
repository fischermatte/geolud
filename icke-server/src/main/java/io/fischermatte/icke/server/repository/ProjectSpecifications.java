package io.fischermatte.icke.server.repository;

import com.querydsl.core.types.Predicate;
import io.fischermatte.icke.server.domain.project.Interval;
import io.fischermatte.icke.server.domain.project.QProject;

public class ProjectSpecifications {
    public static Predicate titleAndIntervalAreEqual(String title, Interval interval) {
        return QProject.project.title.eq(title)
                .and(QProject.project.interval.from.eq(interval.getFrom()))
                .and(QProject.project.interval.to.eq(interval.getTo()));
    }
}
