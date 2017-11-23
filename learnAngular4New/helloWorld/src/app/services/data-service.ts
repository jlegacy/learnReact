import { CannotDeleteError } from './../common/cannot-delete-error';
import { CannotAddError } from './../common/cannot-add-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app.error';
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private http: Http, private url: string) { }

  create(resource: Object) {
    return this.http.post(this.url , resource)
      .map(response => response.json())
      .catch(this.handleError);
  }
  getAll() {
    return this.http.get(this.url).map(response => response.json())
  }
  delete(id: string) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(resource: JSON) {
    return this.http.put(this.url + '/' + resource['id'], resource)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    switch (error.status) {
      case 400:
        return Observable.throw(new CannotAddError());
      case 404:
        return Observable.throw(new NotFoundError());
      default:
        return Observable.throw(new AppError(error));
    }
  }
}





