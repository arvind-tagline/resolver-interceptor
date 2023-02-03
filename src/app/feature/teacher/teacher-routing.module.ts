import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AllStudentResolver } from './resolver/all-student.resolver';
import { ViewStudentDetailsResolver } from './resolver/view-student-details.resolver';

const routes: Routes = [
  {
    path:'',
    component:AllStudentsComponent,
    canActivate:[AuthGuard],//check if user role is diffrent then redirect to login page
    resolve:{allStudent: AllStudentResolver}
  },
  {
    path: 'viewDetail/:id',
    component: StudentDetailsComponent,
    canDeactivate: [AuthGuard], //when you are navigate this router to any other router then ask for conformation
    resolve: { viewDetail: ViewStudentDetailsResolver },
    canActivateChild: [AuthGuard],//not load child component
    children: [
      {
        path: 'child',
        component: ChildComponentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
