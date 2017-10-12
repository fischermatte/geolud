package io.fischermatte.icke.server.project.data;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProjectRepository {
    Project findOne(UUID projectId);

    List<Project> findAll();

    void save(List<Project> projects);
}