import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllExamComponent } from './components/all-exam/all-exam.component';
import { ExamPaperComponent } from './components/exam-paper/exam-paper.component';
import { ExampaperResolver } from './resolver/exampaper.resolver';

const routes: Routes = [
  {
    path:'',
    component:AllExamComponent
  },
  {
    path:'examPaper/:id',
    component:ExamPaperComponent,
    resolve:{examPaper: ExampaperResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
