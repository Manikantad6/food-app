import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { environment } from '.././../../environments/environment'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if(environment.zomatoApiKey){
     var clonedRequest = request.clone({
        setHeaders: {
          'Content-Type': "application/json",
          'user-key': `${environment.zomatoApiKey}`
        }
      });
    }
    console.log(clonedRequest)
    return next.handle(clonedRequest)

  }
}

export let AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}