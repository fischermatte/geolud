package io.fischermatte.icke.server.domain.project;

import com.cloudant.client.api.CloudantClient;
import com.cloudant.client.api.Database;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class CloudantProjectRepository implements ProjectRepository {

    private final Database database;

    public CloudantProjectRepository(CloudantClient client) {
        this.database = client.database("projects", true);
    }

    @Override
    public Project findOne(UUID projectId) {
        return null;
    }

    @Override
    public List<Project> findAll() {
        return database.findAny();
    }

    @Override
    public void save(List<Project> projects) {
        projects.forEach(database::post);
    }
}
