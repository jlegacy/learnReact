import { DataService } from './data-service';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class GitHubHttpService extends DataService {
  constructor(http: Http) {
    super(http, 'https://api.github.com/users/jlegacy/followers');
  }
}





