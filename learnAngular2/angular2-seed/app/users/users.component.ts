import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams} from 'angular2/router';
import {Router} from 'angular2/router';
import {UsersService} from '../users/users.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';


@Component({
    providers: [UsersService, HTTP_PROVIDERS],
    styles: [
        `
        .glyphicon-edit{
            color:green;
        }

        .glyphicon-edit:hover{
            cursor:pointer;
            color:DarkSeaGreen;
        }

         .glyphicon-remove{
            color:red;
        }

        .glyphicon-remove:hover{
            cursor:pointer;
            color:Crimson ;
        }
        
        
        `

    ],
    template: `
        <h1>Users</h1>

        <button (click)="addUser()" class="btn btn-primary">Add User
        
        </button>

        <table class="table table-bordered">
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
        </tr>

        <tr *ngFor="#user of usersList">
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>
               
            <span (click)="editUser(user.id)" class="glyphicon glyphicon-edit"></span>
               
        </td>
        <td> <span (click)="deleteUser(user.id)" class="glyphicon glyphicon-remove"></span></td>

        </tr>

        </table>`

})
export class UsersComponent implements OnInit {
    id;
    date;
    usersList = [];
    constructor(private _usersService: UsersService, private router: Router) {
    }

    setVariables(result) {
        this.usersList = result.user;
    }

    addUser(event) {
        this.router.parent.navigate(['UpSertUser']);
    }


    editUser(id) {
        this.router.parent.navigate(['UpSertUser', { id }]);
    }

    deleteUser(id) {

        var x = window.confirm('Do you really want to delete?');
        if (x === true) {
            this.router.parent.navigate(['DeleteUser', { id }]);
        }

    }

    ngOnInit() {
        var usersList = this._usersService.getUsers('https://jsonplaceholder.typicode.com/users');
        Observable
            .forkJoin(usersList)
            .map(joined => new Object({ user: joined[0] }))
            .subscribe(result => this.setVariables(result), error => console.error(error));
    }

}
