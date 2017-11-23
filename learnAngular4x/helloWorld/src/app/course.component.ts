import { CourseService } from './course.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course',
    template: '<h1>{{title}}</h1>'
})

export class CourseComponent {

    title;

    constructor(service: CourseService) {``
        this.title = service.getCourseFromService()
    }
}