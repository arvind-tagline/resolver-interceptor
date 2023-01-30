import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from 'src/app/shared/service/shared.service';
import { LoginResponse } from '../../interface/auth';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private router:Router,
    private spinner:NgxSpinnerService,
    private sharedService:SharedService
    ) {
    this.loginForm = this.fb.group({
      email: ['arvind.tagline@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit(): void {
    const userRole = localStorage.getItem('userRole');
    this.sharedService.isAuthenticated$.subscribe((isAuth:any)=>{
      if(isAuth){
        if(userRole === 'teacher'){
          this.router.navigate(['teacher']);
        }else if(userRole === 'student'){
          this.router.navigate(['student']);
        }
      }
    });
  }
  public onLogin() {
    this.spinner.show();
    if (this.loginForm.invalid) {
      return
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (res: LoginResponse) => {
        this.spinner.hide();
        // localStorage.setItem('token', res.data.token);
        localStorage.setItem('userRole', res.data.role);
        this.sharedService.isAuthenticated$.next(true);
        if (res.data.role === 'student') {
          this.router.navigate(['student']);
        } else {
          this.router.navigate(['teacher']);
        }
      },
      error: (err: any) => {
        this.spinner.hide();
      }
    });
  }

}
