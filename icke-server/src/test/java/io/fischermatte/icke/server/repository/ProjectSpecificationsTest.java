package io.fischermatte.icke.server.repository;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@ExtendWith(SpringExtension.class)
@DataJpaTest
class ProjectSpecificationsTest {

    @Autowired
    private ProjectRepository projectRepository;

    @Test
    void titleAndIntervalAreEqual() {
        assertNotNull(projectRepository);
    }
}