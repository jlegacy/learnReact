System.register(["angular2/core", "angular2/http", "angular2/router", "./users/users.service", "angular2/common", "./shared/customValidators.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, router_1, users_service_1, router_2, common_1, customValidators_component_1, UpSertUserComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (customValidators_component_1_1) {
                customValidators_component_1 = customValidators_component_1_1;
            }
        ],
        execute: function () {
            UpSertUserComponent = (function () {
                function UpSertUserComponent(fb, _usersService, router, routeParms) {
                    this._usersService = _usersService;
                    this.router = router;
                    this.routeParms = routeParms;
                    this.fb = fb;
                }
                UpSertUserComponent.prototype.routerCanDeactivate = function () {
                    if (this.canRoute === false) {
                        if (this.signupForm.dirty) {
                            return window.confirm('Do you really want to cancel?');
                        }
                    }
                    return true;
                };
                UpSertUserComponent.prototype.editUser = function (id) {
                    var _this = this;
                    var response;
                    this._usersService.getUser('http://jsonplaceholder.typicode.com/users/' + id)
                        .map(function (joined) { return new Object({ user: joined }); })
                        .subscribe(function (data) {
                        _this.user = data['user'];
                    }, function (err) {
                        _this.router.parent.navigate(['NotFound']);
                    });
                };
                UpSertUserComponent.prototype.submitUser = function () {
                    var _this = this;
                    var response;
                    if (this.routeParms.params["id"]) {
                        this._usersService.putUser('https://jsonplaceholder.typicode.com/users/' + this.routeParms.params["id"], this.user)
                            .subscribe(function (x) {
                            _this.canRoute = true;
                            _this.router.parent.navigate(['Users']);
                        });
                    }
                    else {
                        this._usersService.postUser('https://jsonplaceholder.typicode.com/users', this.user)
                            .subscribe(function (x) {
                            _this.canRoute = true;
                            _this.router.parent.navigate(['Users']);
                        });
                    }
                };
                UpSertUserComponent.prototype.ngOnInit = function () {
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
                        name: [this.user.name, common_1.Validators.compose([common_1.Validators.required, customValidators_component_1.CustomValidators.cannotContainSpace])],
                        email: [this.user.email, common_1.Validators.compose([common_1.Validators.required, customValidators_component_1.CustomValidators.validEmail])],
                        phone: [this.user.phone],
                        street: [this.user.address.street,],
                        suite: [this.user.address.suite,],
                        city: [this.user.address.city,],
                        zipcode: [this.user.address.zipcode,],
                    });
                    if (this.routeParms.params["id"]) {
                        this.editUser(this.routeParms.params["id"]);
                        this.header = "Update User";
                    }
                    this.canRoute = false;
                };
                return UpSertUserComponent;
            }());
            UpSertUserComponent = __decorate([
                core_1.Component({
                    providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                    directives: [common_1.FORM_DIRECTIVES],
                    template: "\n        <h1>{{header}}</h1>\n  <div\tclass=\"col-md-6\twell\">\n  <form [ngFormModel]=\"signupForm\" (submit)=\"submitUser()\" #f=\"ngForm\">\n  <fieldset>\n         <h3>User</h3>\n  <div class=\"form-group\">\n    <label for=\"formGroupExampleInput\">Name</label>\n    <input ngControl = \"name\" [(ngModel)] = \"user.name\" type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\">\n     <div \n            *ngIf=\"signupForm.controls.name.touched && !signupForm.controls.name.valid\"\n            class=\"alert-danger\">\n            Name is Required</div>\n    </div>\n  <div class=\"form-group\">\n    <label for=\"formGroupExampleInput2\">Email</label>\n    <input ngControl = \"email\" [(ngModel)] = \"user.email\" type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\n      <div \n            *ngIf=\"signupForm.controls.email.touched && !signupForm.controls.email.valid\"\n            class=\"alert-danger\">\n            Enter Valid Email</div>\n  </div>\n   <div class=\"form-group\">\n    <label for=\"formGroupExampleInput2\">Phone</label>\n    <input ngControl = \"phone\" [(ngModel)] = \"user.phone\" type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\n  </div>\n  </fieldset>\n  <fieldset>\n  <h3>Address</h3>\n   <div class=\"form-group\">\n    <label for=\"formGroupExampleInput\">Street</label>\n    <input ngControl = \"street\" [(ngModel)] = \"user.address.street\" type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"formGroupExampleInput2\">Suite</label>\n    <input ngControl = \"suite\" [(ngModel)] = \"user.address.suite\" type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\n  </div>\n   <div class=\"form-group\">\n    <label for=\"formGroupExampleInput2\">City</label>\n    <input ngControl = \"city\" [(ngModel)] = \"user.address.city\" type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\n  </div>\n   <div class=\"form-group\">\n    <label for=\"formGroupExampleInput2\">ZipCode</label>\n    <input ngControl = \"zipcode\" [(ngModel)] = \"user.address.zipcode\" type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\n  </div>\n  </fieldset>\n  <button type=\"submit\" [disabled]=!signupForm.valid class=\"btn btn-primary\">Submit</button>\n</form> \n</div>"
                }),
                __metadata("design:paramtypes", [common_1.FormBuilder, users_service_1.UsersService, router_2.Router, router_1.RouteParams])
            ], UpSertUserComponent);
            exports_1("UpSertUserComponent", UpSertUserComponent);
        }
    };
});
//# sourceMappingURL=upsertUser.component.js.map