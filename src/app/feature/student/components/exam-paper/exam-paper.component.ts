import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ExamPaperList } from '../../interface/student-interface';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.scss']
})
export class ExamPaperComponent implements OnInit {

  public examId!:string;
  public examPapers:ExamPaperList[];
  constructor(
    private studentService:StudentService,
    private activatedRoute:ActivatedRoute,
    private spinner:NgxSpinnerService,
    private toastr:ToastrService
    ) {
      // this.activatedRoute.params.subscribe((examId:any)=>{
      //   this.examId = examId.id;
      // });
      this.examPapers = this.activatedRoute.snapshot.data['examPaper'].data;
     }

  ngOnInit(): void {
    // this.getPaper();
  }

  public confirm(): boolean {
    return window.confirm('Are you sure you want to exit this exam paper page!');
  }

  private getPaper(){
    // this.spinner.show();
    this.studentService.getPaper(this.examId).subscribe({
      next:(res:any)=>{
        this.examPapers = res.data;
        this.spinner.hide();
      },
      error:(err)=>{
        // this.spinner.hide();
      }
    })
  }
}
