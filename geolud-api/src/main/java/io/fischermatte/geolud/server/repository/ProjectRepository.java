package io.fischermatte.geolud.server.repository;

import io.fischermatte.geolud.server.domain.project.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends MongoRepository<Project, String> {
}