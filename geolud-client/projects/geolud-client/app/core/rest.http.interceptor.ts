import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Injectable, Provider} from '@angular/core';

@Injectable()
export class RestHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Content-Type', 'application/json; charset=utf-8').set('X-Requested-With', 'XMLHttpRequest'),
    });
    return next.handle(authReq);
  }
}

export const RestHttpInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: RestHttpInterceptor,
  multi: true,
};
