System.register(["angular2/core", "angular2/http", "angular2/router", "../users/users.service", "rxjs/Observable", "rxjs/add/operator/debounceTime", "rxjs/add/observable/range", "rxjs/add/observable/throw", "rxjs/add/operator/catch", "rxjs/add/observable/forkJoin", "rxjs/add/operator/retry", "rxjs/add/operator/timeout", "rxjs/add/operator/delay", "rxjs/add/operator/mergeMap", "rxjs/add/observable/interval", "rxjs/add/operator/map"], function (exports_1, context_1) {
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
    var core_1, http_1, router_1, users_service_1, Observable_1, UsersComponent;
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
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            },
            function (_4) {
            },
            function (_5) {
            },
            function (_6) {
            },
            function (_7) {
            },
            function (_8) {
            },
            function (_9) {
            },
            function (_10) {
            },
            function (_11) {
            }
        ],
        execute: function () {
            UsersComponent = (function () {
                function UsersComponent(_usersService, router) {
                    this._usersService = _usersService;
                    this.router = router;
                    this.usersList = [];
                }
                UsersComponent.prototype.setVariables = function (result) {
                    this.usersList = result.user;
                };
                UsersComponent.prototype.addUser = function (event) {
                    this.router.parent.navigate(['UpSertUser']);
                };
                UsersComponent.prototype.editUser = function (id) {
                    this.router.parent.navigate(['UpSertUser', { id: id }]);
                };
                UsersComponent.prototype.deleteUser = function (id) {
                    var x = window.confirm('Do you really want to delete?');
                    if (x === true) {
                        this.router.parent.navigate(['DeleteUser', { id: id }]);
                    }
                };
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var usersList = this._usersService.getUsers('https://jsonplaceholder.typicode.com/users');
                    Observable_1.Observable
                        .forkJoin(usersList)
                        .map(function (joined) { return new Object({ user: joined[0] }); })
                        .subscribe(function (result) { return _this.setVariables(result); }, function (error) { return console.error(error); });
                };
                return UsersComponent;
            }());
            UsersComponent = __decorate([
                core_1.Component({
                    providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                    styles: [
                        "\n        .glyphicon-edit{\n            color:green;\n        }\n\n        .glyphicon-edit:hover{\n            cursor:pointer;\n            color:DarkSeaGreen;\n        }\n\n         .glyphicon-remove{\n            color:red;\n        }\n\n        .glyphicon-remove:hover{\n            cursor:pointer;\n            color:Crimson ;\n        }\n        \n        \n        "
                    ],
                    template: "\n        <h1>Users</h1>\n\n        <button (click)=\"addUser()\" class=\"btn btn-primary\">Add User\n        \n        </button>\n\n        <table class=\"table table-bordered\">\n        <tr>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Edit</th>\n        <th>Delete</th>\n        </tr>\n\n        <tr *ngFor=\"#user of usersList\">\n        <td>{{user.name}}</td>\n        <td>{{user.email}}</td>\n        <td>\n               \n            <span (click)=\"editUser(user.id)\" class=\"glyphicon glyphicon-edit\"></span>\n               \n        </td>\n        <td> <span (click)=\"deleteUser(user.id)\" class=\"glyphicon glyphicon-remove\"></span></td>\n\n        </tr>\n\n        </table>"
                }),
                __metadata("design:paramtypes", [users_service_1.UsersService, router_1.Router])
            ], UsersComponent);
            exports_1("UsersComponent", UsersComponent);
        }
    };
});
//# sourceMappingURL=users.component.js.map