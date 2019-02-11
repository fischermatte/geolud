import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Project } from '../api/api';

@Injectable()
export class ProjectService {
  private url: string = environment.appConfig.apiBase + `/api/projects`;
  private publisher: Observable<Project[]>;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Project[]> {
    if (!this.publisher) {
      this.publisher = this.http.get<Project[]>(this.url).pipe(
        publishReplay(1),
        refCount(),
      );
    }
    return this.publisher;
  }
}
