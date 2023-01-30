import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { AllExamComponent } from './components/all-exam/all-exam.component';
import { ExamPaperComponent } from './components/exam-paper/exam-paper.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
  
    AllExamComponent,
       ExamPaperComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NgxPaginationModule
  ]
})
export class StudentModule { }
