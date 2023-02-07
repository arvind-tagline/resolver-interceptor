import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _isLoggedIn$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  constructor(private http:HttpClient) { 
    const token = localStorage.getItem('token');
    this._isLoggedIn$.next(!!token);
  }

  public login(data:any){
    return this.http.post(`${environment.baseUrl}users/Login`,data).pipe(tap((res:any)=>{
      this._isLoggedIn$.next(true);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userName', res.data.name);
    }));
  }

  get accessToken(){
    return localStorage.getItem('token') || null;
  }

  get userRole(){
    if(localStorage.getItem('userRole') === 'teacher'){
      return true;
    }else{
      return false;
    }
  }

  get isTeacher(){
    if(localStorage.getItem('userRole') === 'teacher'){
      return true;
    }else{
      return false;
    }
  }
}
