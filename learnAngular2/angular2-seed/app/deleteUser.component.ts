import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, CanDeactivate} from 'angular2/router';
import {UsersService} from './users/users.service';
import {Observable} from 'rxjs/Observable';
import {Router} from 'angular2/router';

import {ControlGroup, NgFormModel, NgControl, FORM_DIRECTIVES, FormBuilder, Validators } from 'angular2/common';

@Component({
    providers: [UsersService, HTTP_PROVIDERS],
    template: `
        <h1>Delete</h1>
 `
})
export class DeleteUserComponent implements OnInit {
    signupForm: ControlGroup;
    canRoute;
    user;
    fb;
    header;

    constructor(private _usersService: UsersService, private router: Router, private routeParms: RouteParams) {
       
    }
    deleteUser() {
        this._usersService.deleteUser('https://jsonplaceholder.typicode.com/users/' + this.routeParms.params["id"])
            .subscribe(x => {
                this.router.parent.navigate(['Users']);

            })
    }

    ngOnInit() {
      this.deleteUser();
    }


}