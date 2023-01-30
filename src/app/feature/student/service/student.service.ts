import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  public getAllExam():Observable<any>{
    return this.http.get(`${environment.baseUrl}student/studentExam`);
  }

  public getPaper(examId:any):Observable<any>{
    return this.http.get(`${environment.baseUrl}student/examPaper?id=${examId}`);
  }

}
