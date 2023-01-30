import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../service/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class ErrorhandlerInterceptor implements HttpInterceptor {

  constructor(
    private toster: ToastrService,
    private spinner:NgxSpinnerService
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('This is client side error');
            this.toster.error('Somthing went wrong');
            errorMsg = `Error: ${error.error.message}`;
            this.spinner.hide();
          } else {
            console.log('This is server side error');
            this.toster.error('Somthing went wrong');
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            this.spinner.hide();
          }
          console.log(errorMsg);
          return throwError(errorMsg);
        })
      )
  }
}
