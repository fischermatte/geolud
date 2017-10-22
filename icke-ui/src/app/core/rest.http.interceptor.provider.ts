import {ClassProvider} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RestHttpInterceptor} from "./rest.http.interceptor";

export class RestHttpInterceptorProvider implements ClassProvider {
  useClass;
  provide;
  multi;

  constructor(private restHttpInterceptor: RestHttpInterceptor) {
    this.provide = HTTP_INTERCEPTORS;
    this.useClass = restHttpInterceptor;
    this.multi = true;
  }
}


