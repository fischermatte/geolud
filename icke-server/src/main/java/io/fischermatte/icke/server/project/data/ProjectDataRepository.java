package io.fischermatte.icke.server.project.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectDataRepository extends MongoRepository<ProjectData, String> {
}