package io.fischermatte.geolud.server.project.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends ReactiveMongoRepository<Project, String> {
}