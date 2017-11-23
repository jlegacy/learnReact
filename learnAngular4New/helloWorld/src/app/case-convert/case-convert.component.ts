import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'case-convert',
  templateUrl: './case-convert.component.html',
  styleUrls: ['./case-convert.component.css']
})
export class CaseConvertComponent implements OnInit {
  inputValue = "";
  convertedValue = "";



  constructor() { }

  ngOnInit() {
  }

}
