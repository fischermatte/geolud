package io.fischermatte.icke.server.repository;

import io.fischermatte.icke.server.domain.project.Interval;
import io.fischermatte.icke.server.domain.project.Project;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;


@ExtendWith(SpringExtension.class)
@DataJpaTest
class ProjectSpecificationsTest {

    @Autowired
    private ProjectRepository projectRepository;

    @Test
    void titleAndIntervalAreEqual() {
        LocalDate startDate = LocalDate.of(2018, 1, 1);
        Project project1 = projectRepository.save(new Project()
                .withTitle("Title 1")
                .withInterval(new Interval()
                        .withFrom(startDate)
                        .withTo(startDate.plusDays(1))));
        Project project2 = projectRepository.save(new Project()
                .withTitle("Title 2")
                .withInterval(new Interval()
                        .withFrom(startDate)
                        .withTo(startDate.plusDays(1))));
        Project project3 = projectRepository.save(new Project()
                .withTitle("Title 2")
                .withInterval(new Interval()
                        .withFrom(startDate.plusDays(2))
                        .withTo(startDate.plusDays(3))));

        assertTrue(projectRepository.exists(ProjectSpecifications.titleAndIntervalAreEqual(project1.getTitle(), project1.getInterval())));
        assertTrue(projectRepository.exists(ProjectSpecifications.titleAndIntervalAreEqual(project2.getTitle(), project2.getInterval())));
        assertTrue(projectRepository.exists(ProjectSpecifications.titleAndIntervalAreEqual(project3.getTitle(), project3.getInterval())));
        assertFalse(projectRepository.exists(ProjectSpecifications.titleAndIntervalAreEqual("Title 1", new Interval().withFrom(startDate).withTo(startDate))));
    }
}