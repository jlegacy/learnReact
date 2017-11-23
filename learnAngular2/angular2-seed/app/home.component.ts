import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams} from 'angular2/router';

@Component({
    template: `
        <h1>Home</h1>`
       
})
export class HomeComponent implements OnInit{
    id;
    date;
    constructor(routeParams: RouteParams){
    //    this.id = routeParams.get("id");
    //    this.date = routeParams.get("date");
    }


    ngOnInit(){
        //console.log(this.id, this.date);
    }
    
   
}