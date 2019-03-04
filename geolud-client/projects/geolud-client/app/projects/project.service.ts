import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import { Project } from './project.model';

interface ProjectsResponse {
  allProjects: Project[];
}

const allProjectsQuery = gql`
  {
    allProjects {
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

  findAll(): Observable<Project[]> {
    if (!this.publisher) {
      this.publisher = this.apollo
        .watchQuery({
          query: allProjectsQuery,
        })
        .valueChanges.pipe(map((result: ApolloQueryResult<ProjectsResponse>) => result.data.allProjects));
    }
    return this.publisher;
  }
}
