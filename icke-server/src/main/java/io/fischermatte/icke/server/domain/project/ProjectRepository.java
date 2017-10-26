package io.fischermatte.icke.server.domain.project;

import org.springframework.data.couchbase.core.query.ViewIndexed;
import org.springframework.data.couchbase.repository.CouchbaseRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@ViewIndexed(designDoc = "project", viewName = "PROJECT_VIEW")
@Repository
public interface ProjectRepository extends CouchbaseRepository<Project, UUID> {
}