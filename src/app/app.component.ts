import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './feature/auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resolver-interceptor';
  constructor(
    private router:Router,
    private spinner:NgxSpinnerService,
    public authService:AuthService
    ){
    this.router.events.subscribe((e: any) => {
      this.navigationInterceptor(e);
    });

    // if(localStorage.getItem('token')){
    //   this.authService._isLoggedIn$.next(true);
    // }
  }

  public navigationInterceptor(event: RouterEvent): void {
    // if (event instanceof NavigationStart) {
    //   this.spinner.show();
    // }
    // if (event instanceof NavigationEnd) {
    //   this.spinner.hide();
    // }
    // if (event instanceof NavigationCancel) {
    //   this.spinner.hide();
    // }
    // if (event instanceof NavigationError) {
    //   this.spinner.hide();
    // }
  }
}
