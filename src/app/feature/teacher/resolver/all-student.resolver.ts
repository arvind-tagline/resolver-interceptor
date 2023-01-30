import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TeacherService } from '../service/teacher.service';

@Injectable({
  providedIn: 'root'
})
export class AllStudentResolver implements Resolve<boolean> {

  constructor(private teacherService:TeacherService){ }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.teacherService.getAllStudent();
  }
}
