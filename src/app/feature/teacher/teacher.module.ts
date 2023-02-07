import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { ViewExamComponent } from './components/view-exam/view-exam.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllStudentsComponent,
    ViewExamComponent,
    StudentDetailsComponent,
    ChildComponentComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    NgxPaginationModule,
    DirectivesModule,
    FormsModule
  ]
})
export class TeacherModule {
  constructor() {
    console.log('TeacherModule :>> ', 123132);
  }
}
