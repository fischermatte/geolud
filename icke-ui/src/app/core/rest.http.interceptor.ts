import {ClassProvider, Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
class RestHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Content-Type', 'application/json; charset=utf-8')
    });
    return next.handle(authReq);
  }
}

@Injectable()
export class RestHttpInterceptorProvider implements ClassProvider {
  useClass;
  provide;
  multi;

  constructor(private restHttpInterceptor : RestHttpInterceptor) {
    this.provide = HTTP_INTERCEPTORS;
    this.useClass = restHttpInterceptor;
    this.multi = true;
  }
}

