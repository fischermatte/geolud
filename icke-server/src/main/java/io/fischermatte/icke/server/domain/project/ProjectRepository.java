package io.fischermatte.icke.server.domain.project;

import java.util.List;
import java.util.UUID;

public interface ProjectRepository {
    Project findOne(UUID projectId);

    List<Project> findAll();

    void save(List<Project> projects);
}