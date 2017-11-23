import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, CanDeactivate} from 'angular2/router';
import {UsersService} from './users/users.service';
import {Observable} from 'rxjs/Observable';
import {Router} from 'angular2/router';

import {ControlGroup, NgFormModel, NgControl, FORM_DIRECTIVES, FormBuilder, Validators } from 'angular2/common';

import {CustomValidators} from './shared/customValidators.component';


@Component({
    providers: [UsersService, HTTP_PROVIDERS],
    directives: [FORM_DIRECTIVES],
    template: `
        <h1>{{header}}</h1>
  <div	class="col-md-6	well">
  <form [ngFormModel]="signupForm" (submit)="submitUser()" #f="ngForm">
  <fieldset>
         <h3>User</h3>
  <div class="form-group">
    <label for="formGroupExampleInput">Name</label>
    <input ngControl = "name" [(ngModel)] = "user.name" type="text" class="form-control" id="formGroupExampleInput">
     <div 
            *ngIf="signupForm.controls.name.touched && !signupForm.controls.name.valid"
            class="alert-danger">
            Name is Required</div>
    </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Email</label>
    <input ngControl = "email" [(ngModel)] = "user.email" type="text" class="form-control" id="formGroupExampleInput2">
      <div 
            *ngIf="signupForm.controls.email.touched && !signupForm.controls.email.valid"
            class="alert-danger">
            Enter Valid Email</div>
  </div>
   <div class="form-group">
    <label for="formGroupExampleInput2">Phone</label>
    <input ngControl = "phone" [(ngModel)] = "user.phone" type="text" class="form-control" id="formGroupExampleInput2">
  </div>
  </fieldset>
  <fieldset>
  <h3>Address</h3>
   <div class="form-group">
    <label for="formGroupExampleInput">Street</label>
    <input ngControl = "street" [(ngModel)] = "user.address.street" type="text" class="form-control" id="formGroupExampleInput">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Suite</label>
    <input ngControl = "suite" [(ngModel)] = "user.address.suite" type="text" class="form-control" id="formGroupExampleInput2">
  </div>
   <div class="form-group">
    <label for="formGroupExampleInput2">City</label>
    <input ngControl = "city" [(ngModel)] = "user.address.city" type="text" class="form-control" id="formGroupExampleInput2">
  </div>
   <div class="form-group">
    <label for="formGroupExampleInput2">ZipCode</label>
    <input ngControl = "zipcode" [(ngModel)] = "user.address.zipcode" type="text" class="form-control" id="formGroupExampleInput2">
  </div>
  </fieldset>
  <button type="submit" [disabled]=!signupForm.valid class="btn btn-primary">Submit</button>
</form> 
</div>`


})
export class UpSertUserComponent implements OnInit, CanDeactivate {
    signupForm: ControlGroup;
    canRoute;
    user;
    fb;
    header;

    constructor(fb: FormBuilder, private _usersService: UsersService, private router: Router, private routeParms: RouteParams) {
        this.fb = fb;
    }

    routerCanDeactivate() {
        if (this.canRoute === false) {
            if (this.signupForm.dirty) {
                return window.confirm('Do you really want to cancel?');
            }
        }
        return true;
    }

    editUser(id) {
        var response;
        this._usersService.getUser('http://jsonplaceholder.typicode.com/users/' + id)
            .map(joined => new Object({ user: joined }))
            .subscribe(
            data => {
                this.user = data['user']
            },
            err => {
                this.router.parent.navigate(['NotFound']);
            }


            )

    }


    submitUser() {

        var response;

        if (this.routeParms.params["id"]) {
            this._usersService.putUser('https://jsonplaceholder.typicode.com/users/' + this.routeParms.params["id"], this.user)
                .subscribe(x => {
                    this.canRoute = true;
                    this.router.parent.navigate(['Users']);
                })
        }
        else {
            this._usersService.postUser('https://jsonplaceholder.typicode.com/users', this.user)
                .subscribe(x => {
                    this.canRoute = true;
                    this.router.parent.navigate(['Users']);
                })


        }
    }

    ngOnInit() {
        this.header = "Add User";
        this.user = {};
        this.user.address = {};
        this.user.name = "";
        this.user.email = "";
        this.user.phone = "";
        this.user.address = {};
        this.user.address.street = "";
        this.user.address.suite = "";
        this.user.address.city = "";
        this.user.address.zip = "";

        this.signupForm = this.fb.group({
            name: [this.user.name, Validators.compose([Validators.required, CustomValidators.cannotContainSpace])],
            email: [this.user.email, Validators.compose([Validators.required, CustomValidators.validEmail])],
            phone: [this.user.phone],
            street: [this.user.address.street,],
            suite: [this.user.address.suite,],
            city: [this.user.address.city,],
            zipcode: [this.user.address.zipcode,],
        })

        if (this.routeParms.params["id"]) {
            this.editUser(this.routeParms.params["id"]);
            this.header = "Update User"
        }


        this.canRoute = false;

    }


}