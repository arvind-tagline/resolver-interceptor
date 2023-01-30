import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result, StudentDetailsResponse } from '../../interface/teacher';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  public id!: string;
  public _id!: string;
  public name!: string;
  public email!: string;
  public studentData: StudentDetailsResponse;
  public resultTable: boolean = false;
  public studentResults!: Result[];
  public noExam: boolean = false;
  public viewExam: boolean = true;
  public hideExam: boolean = false;
  public noAnswer: boolean = false;
  public studentAnswer:any;
  public answerLength:any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.studentData = this.activatedRoute.snapshot.data['viewDetail'];
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['_id'];
    this.getData();
  }

  public getData() {
    if (this.studentData.statusCode == 200) {
      this._id = this.studentData.data[0]._id;
      this.name = this.studentData.data[0].name;
      this.email = this.studentData.data[0].email;
    }
  }
  public result() {
    if (this.studentData.data[0].Result.length > 0) {
      this.studentResults = this.studentData.data[0].Result;
      this.resultTable = true;
      this.viewExam = false;
      this.hideExam = true;
    } else {
      this.hideExam = true;
      this.viewExam = false;
      this.noExam = true;
    }
  }

  public hideResult() {
    this.resultTable = false;
    this.viewExam = true;
    this.hideExam = false;
  }

  public onModal(i: number) {
    if (this.studentResults[i].studentAnswer) {
      if (this.studentResults[i].studentAnswer.length > 0) {
        this.studentAnswer = this.studentResults[i].studentAnswer;
        this.noAnswer = false;
      }
    } else {
      this.noAnswer = true;
    }
  }

}
