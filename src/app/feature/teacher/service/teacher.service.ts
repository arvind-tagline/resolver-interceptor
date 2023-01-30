import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  public token = localStorage.getItem('token') || '';
  public header = new HttpHeaders().set('access-token', this.token);
  constructor(private http:HttpClient) { }


  public getAllStudent():Observable<any> {
    return this.http.get(`${environment.baseUrl}dashboard/Teachers`);
  }
  
  // public getAllStudent():Observable<any> {
  //   return this.http.get(`${environment.baseUrl}dashboard/Teachers`,{ headers: this.header });
  // }

  public viewData(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}dashboard/Teachers/viewStudentDetail?id=${id}`);
  }
}
