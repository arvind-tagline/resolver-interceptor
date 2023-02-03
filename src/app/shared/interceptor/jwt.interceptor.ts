import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { AuthService } from 'src/app/feature/auth/service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  public token:string|null = this.authService.accessToken;
  constructor(private authService:AuthService,private spinner:NgxSpinnerService ) {
   }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinner.show();
    request = request.clone({
      setHeaders: { 'access-token': `${this.authService.accessToken}`},
    });
    return next.handle(request).pipe(
      finalize(() => {
        this.spinner.hide(); // Hide the spinner
      })
    );;
  }
}
