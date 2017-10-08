package io.fischermatte.icke.server.project.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ProjectRepository extends MongoRepository<Project, UUID> {
}