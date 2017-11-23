import { DataService } from './data-service';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class HttpServiceService extends DataService {
  constructor(http: Http) {
    super(http, 'http://jsonplaceholder.typicode.com/posts');
  }
}





