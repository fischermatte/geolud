package io.fischermatte.geolud.server.domain.project;

import io.fischermatte.geolud.server.domain.project.Project;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends ReactiveMongoRepository<Project, String> {
}