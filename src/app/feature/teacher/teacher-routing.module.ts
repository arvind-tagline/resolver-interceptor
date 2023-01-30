import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AllStudentResolver } from './resolver/all-student.resolver';
import { ViewStudentDetailsResolver } from './resolver/view-student-details.resolver';

const routes: Routes = [
  {
    path:'',
    component:AllStudentsComponent,
    resolve:{allStudent: AllStudentResolver}
  },
  {
    path:'viewDetail/:id',
    component: StudentDetailsComponent,
    resolve:{viewDetail:ViewStudentDetailsResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
