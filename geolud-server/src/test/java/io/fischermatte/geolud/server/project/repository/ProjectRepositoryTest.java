package io.fischermatte.geolud.server.project.repository;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.domain.Example;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@DataMongoTest
class ProjectRepositoryTest {

    @Autowired
    private ProjectRepository repository;

    @Test
    void exists() {
        assertNotNull(repository);

        Project project = new Project()
                .withCustomer(new Customer()
                        .withName("A")
                        .withUrl("https://www.a.com"))
                .withDescription("A")
                .withInterval(new Interval()
                        .withFrom(LocalDate.of(2018, 1, 1))
                        .withTo(LocalDate.of(2018, 1, 1)))
                .withTitle("A");

        assertFalse(repository.exists(Example.of(project)).block());
        repository.save(project).block();
        assertTrue(repository.exists(Example.of(project)).block());
    }
}