package io.fischermatte.icke.server.repository;

import io.fischermatte.icke.server.domain.project.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, String>, QuerydslPredicateExecutor {
}