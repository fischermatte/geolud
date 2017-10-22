import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import {Project} from '../../../generated-api/model/Project';
import {environment} from '../../environments/environment';

@Injectable()
export class ProjectService {
  private publisher: Observable<Project[]>;

  constructor(private http: HttpClient) {
    console.log('project service created');
  }

  getAll(): Observable<Project[]> {
    if (!this.publisher) {

      this.publisher = this.http.get<Project[]>(environment.apiBase + `/projects`)
        .publishReplay(1)
        .refCount();
    }
    return this.publisher;
  }

}
