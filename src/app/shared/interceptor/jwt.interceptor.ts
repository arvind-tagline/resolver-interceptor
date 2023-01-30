import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/feature/auth/service/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  public token:string|null = this.authService.accessToken;
  constructor(private authService:AuthService) {
   }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: { 'access-token': `${this.authService.accessToken}`},
    });
    return next.handle(request);
  }
}
