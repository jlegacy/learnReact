import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams} from 'angular2/router';

@Component({
    template: `
        <h1>Archives</h1>
        <h3>{{date}}/{{id}}</h3>
    `
})
export class DateLinkComponent implements OnInit{
    id;
    date;
    constructor(routeParams: RouteParams){
      this.id = routeParams.get("id");
      this.date = routeParams.get("date");
    }


    ngOnInit(){
        console.log(this.id, this.date);
    }
    
   
}