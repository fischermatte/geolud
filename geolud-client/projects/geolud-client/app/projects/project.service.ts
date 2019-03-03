import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../api/api';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';

interface ProjectsResponse {
  projects: Project[];
}

const projectsGqlQuery = gql`
  {
    projects {
      id
      title
      description
      period {
        from
        to
      }
      customer {
        name
        url
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private publisher: Observable<Project[]>;

  constructor(private apollo: Apollo) {}

  getAll(): Observable<Project[]> {
    if (!this.publisher) {
      this.publisher = this.apollo
        .watchQuery({
          query: projectsGqlQuery,
        })
        .valueChanges.pipe(map((result: ApolloQueryResult<ProjectsResponse>) => result.data.projects));
    }
    return this.publisher;
  }
}
