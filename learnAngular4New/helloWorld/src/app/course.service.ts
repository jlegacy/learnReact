import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor() { }

  getCourseFromService() {
    return "got from service";
  }

}
