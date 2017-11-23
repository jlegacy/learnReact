System.register(["angular2/core", "angular2/http", "../users/users.service", "rxjs/Observable"], function (exports_1, context_1) {
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
    var core_1, http_1, users_service_1, Observable_1, UsersDropListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            UsersDropListComponent = (function () {
                function UsersDropListComponent(_usersService) {
                    this._usersService = _usersService;
                    this.userChange = new core_1.EventEmitter();
                    this.usersList = [];
                }
                UsersDropListComponent.prototype.setVariables = function (result) {
                    console.log(result.user);
                    this.usersList = result.user;
                };
                UsersDropListComponent.prototype.setSelected = function (userId) {
                    this.userChange.emit({ value: userId });
                };
                UsersDropListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var usersList = this._usersService.getUsers('https://jsonplaceholder.typicode.com/users');
                    Observable_1.Observable
                        .forkJoin(usersList)
                        .map(function (joined) { return new Object({ user: joined[0] }); })
                        .subscribe(function (result) { return _this.setVariables(result); }, function (error) { return console.error(error); });
                };
                return UsersDropListComponent;
            }());
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], UsersDropListComponent.prototype, "userChange", void 0);
            UsersDropListComponent = __decorate([
                core_1.Component({
                    providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                    selector: 'usersDropList',
                    styles: [
                        "\n        .glyphicon-edit{\n            color:green;\n        }\n\n        .glyphicon-edit:hover{\n            cursor:pointer;\n            color:DarkSeaGreen;\n        }\n\n         .glyphicon-remove{\n            color:red;\n        }\n\n        .glyphicon-remove:hover{\n            cursor:pointer;\n            color:Crimson ;\n        }\n        "
                    ],
                    template: "\n    <div>\n       <select class=\"form-control\" #u (change)=\"setSelected(u.value)\">\n          <option value=0>All Users</option>\n          <option value={{user.id}} *ngFor=\"#user of usersList\">{{user.name}}</option>\n       </select>\n    </div>"
                }),
                __metadata("design:paramtypes", [users_service_1.UsersService])
            ], UsersDropListComponent);
            exports_1("UsersDropListComponent", UsersDropListComponent);
        }
    };
});
//# sourceMappingURL=usersDropList.component.js.map