import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/feature/auth/service/auth.service';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogin$ = this.sharedService.isAuthenticated$;

  constructor(
    private router: Router,
    private sharedService:SharedService,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.sharedService.isAuthenticated$.next(true);
    }
  }

  public logOut() {
    localStorage.clear();
    // this.isLogin = false;
    this.authService._isLoggedIn$.next(false);
    this.sharedService.isAuthenticated$.next(false);
    this.router.navigate(['/login']);
  }

}
