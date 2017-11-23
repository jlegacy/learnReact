import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {UsersService} from '../users/users.service';
import {Observable} from 'rxjs/Observable';


@Component({
    providers: [UsersService, HTTP_PROVIDERS],
    selector: 'usersDropList',
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
    <div>
       <select class="form-control" #u (change)="setSelected(u.value)">
          <option value=0>All Users</option>
          <option value={{user.id}} *ngFor="#user of usersList">{{user.name}}</option>
       </select>
    </div>`
})
export class UsersDropListComponent implements OnInit {
    @Output() userChange = new EventEmitter();
    id;
    date;

    usersList = [];
    constructor(private _usersService: UsersService) {
    }

    setVariables(result) {
        console.log(result.user);
        this.usersList = result.user;
    }

     setSelected(userId) {
         this.userChange.emit({value:userId});
    }

    ngOnInit() {
        var usersList = this._usersService.getUsers('https://jsonplaceholder.typicode.com/users');
        Observable
            .forkJoin(usersList)
            .map(joined => new Object({ user: joined[0] }))
            .subscribe(result => this.setVariables(result), error => console.error(error));
    }

}
    
   
