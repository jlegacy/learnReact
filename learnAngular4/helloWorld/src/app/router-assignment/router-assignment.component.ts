import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-assignment',
  templateUrl: './router-assignment.component.html',
  styleUrls: ['./router-assignment.component.css']
})
export class RouterAssignmentComponent implements OnInit {

  private listData;
  private startPage;

  constructor() {}

  ngOnInit() {
    this.startPage = 1;
    this.listData = [
      { year: 2017, month: '1' },
      { year: 2017, month: '2' },
      { year: 2017, month: '3' }
    ]
  }

}
