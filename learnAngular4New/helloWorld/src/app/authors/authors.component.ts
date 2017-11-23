import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors = [];
  authorsCount;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.authorsCount = this.authors.length;
  }

  ngOnInit() {
  }

}
