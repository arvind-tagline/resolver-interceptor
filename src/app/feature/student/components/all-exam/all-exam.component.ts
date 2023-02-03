import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AllExamData, AllExamDataResponse } from '../../interface/student-interface';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-all-exam',
  templateUrl: './all-exam.component.html',
  styleUrls: ['./all-exam.component.scss']
})
export class AllExamComponent implements OnInit {

  public allExamList:AllExamData[] = [];
  public p: number = 1;
  public count: number = 15;
  constructor(
    private studentService:StudentService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    const userRole = localStorage.getItem('userRole');
    if(userRole === 'student'){
      this.getAllExam();
    }
  }


  public getAllExam(){
    // this.spinner.show();
    this.studentService.getAllExam().subscribe({
      next:(res:AllExamDataResponse)=>{
        if(res.data){
          this.allExamList = res.data.map((exam:AllExamData)=>{
            // const modifyData = {
            //   studentName: exam.email.split('@')[0].split('.'),
            //   ...exam
            // }
            const modifyData = {
              studentName: exam.email.split('@')[0],
              ...exam
            }
            return modifyData;
          })
        }
        // this.allExamList = res.data;
        // this.spinner.hide();
      },
      error:(err:any)=>{
        console.log('err :>> ', err);
      }
    })
  }
}
