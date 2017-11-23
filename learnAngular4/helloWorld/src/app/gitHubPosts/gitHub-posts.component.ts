import { GitHubHttpService } from './../services/gitHub-http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-posts',
  templateUrl: './gitHub-posts.component.html',
  styleUrls: ['./gitHub-posts.component.css']
})
export class GitHubPostsComponent implements OnInit {
  list = [];
  constructor(private httpService: GitHubHttpService) { }

  ngOnInit() {
    this.httpService.getAll()
      .subscribe(response => {
        this.list = response;
      })
  }

}
