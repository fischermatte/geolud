package io.fischermatte.icke.server.repository;

import io.fischermatte.icke.server.domain.project.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends MongoRepository<Project, String> {
}