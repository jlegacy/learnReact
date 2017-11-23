import { Component, OnInit } from '@angular/core';
import { AngularIndexedDB } from 'angular2-indexeddb';

@Component({
  selector: 'db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DBComponent implements OnInit {

  db: any;
  persons = [];
  clearDB() {
    this.clearDataStore();
  }

  addPerson(person){
     this.db.add('people', person).then(() => {
    }, (error) => {
      //    this.populateEmail();
      console.log(error);
    });

  }

  writeDB() {
    this.addPerson( { name: 'test', email: 'test' });
    this.addPerson( { name: 'test1', email: 'test1' });
  }

  displayDB() {
    this.persons = [];
    this.db.getAll('people').then((people) => {
      for (let person of people){
        this.persons.push(person);
      }
      console.log(people);
    }, (error) => {
      console.log(error);
    });
  }



  constructor() {

  }

  clearDataStore() {
    this.db.clear('people').then(() => {
      console.log('cleared');
      // Do something after clear
    }, (error) => {
      console.log(error);
    });

    /*   this.db.getByKey('people', 1).then((person) => {
        console.log(person);
      }, (error) => {
        console.log(error);
      }); */
  }


  ngOnInit() {
    console.log('init');
    if (!('indexedDB' in window)) {
      console.log('This browser doesn\'t support IndexedDB');
      return;
    }

    this.db = new AngularIndexedDB('myDb', 1);

    this.db.createStore(1, (evt) => {

      let objectStore = evt.currentTarget.result.createObjectStore(
        'people', { keyPath: "id", autoIncrement: true });

      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("email", "email", { unique: true });

    }).then(() => {
      /*  this.db.add('people', { name: 'test', email: 'test' }).then(() => {
         //  this.populateEmail();
         // Do something after the value was added 
       }, (error) => {
         //    this.populateEmail();
         console.log(error);
       }); */

    }).catch((error) => {
      alert(error)
    });


  }


}
