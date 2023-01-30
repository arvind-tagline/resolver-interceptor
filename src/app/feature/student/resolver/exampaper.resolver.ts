import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { StudentService } from '../service/student.service';

@Injectable({
  providedIn: 'root'
})
export class ExampaperResolver implements Resolve<boolean> {

  constructor(private studentService:StudentService){ }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.studentService.getPaper(route.params['id']);
  }
}
