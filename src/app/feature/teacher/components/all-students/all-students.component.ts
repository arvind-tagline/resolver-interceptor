import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentList } from '../../interface/teacher';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent implements OnInit {

  public allStudentList!:StudentList[];
  public p: any = 1;
  public count: any = 15;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.allStudentList = this.activatedRoute.snapshot.data['allStudent'].data;
  }


}
