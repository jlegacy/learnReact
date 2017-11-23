System.register(["angular2/core", "rxjs/Observable", "./posts/post.service", "angular2/http", "rxjs/add/operator/debounceTime", "rxjs/add/observable/fromArray", "rxjs/add/observable/range", "rxjs/add/observable/throw", "rxjs/add/operator/catch", "rxjs/add/observable/forkJoin", "rxjs/add/operator/retry", "rxjs/add/operator/timeout", "rxjs/add/operator/delay", "rxjs/add/operator/mergeMap", "rxjs/add/observable/interval", "rxjs/add/operator/map"], function (exports_1, context_1) {
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
    var core_1, Observable_1, post_service_1, http_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
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
            },
            function (_12) {
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(_postService) {
                    this._postService = _postService;
                    this.tweetObjectUser = {};
                    this.tweetObjectFollowers = [];
                    this.isLoading = true;
                }
                AppComponent.prototype.setVariables = function (result) {
                    console.log(result);
                    this.tweetObjectUser = result.user;
                    this.tweetObjectFollowers = result.followers;
                    this.isLoading = false;
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var userStream = this._postService.getPosts('https://api.github.com/users/octocat');
                    var followerStream = this._postService.getPosts('https://api.github.com/users/octocat/followers').delay(3000);
                    Observable_1.Observable
                        .forkJoin(userStream, followerStream)
                        .map(function (joined) { return new Object({ user: joined[0], followers: joined[1] }); })
                        .subscribe(function (result) { return _this.setVariables(result); }, function (error) { return console.error(error); });
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS],
                    selector: 'my-app',
                    template: "\n    <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n      <div class=\"media\">\n  <div class=\"media-left\">\n    <a href=\"#\">\n      <img class=\"media-object avatar\" src=\"{{tweetObjectUser.avatar_url}}\" alt=\"Generic placeholder image\">\n    </a>\n  </div>\n  \n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">{{tweetObjectUser.name}}</h4>\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n    <div *ngFor=\"#follower of tweetObjectFollowers\" class=\"media mt-2\">\n      <a class=\"media-left\" href=\"#\">\n        <img class=\"media-object avatar\" src=\"{{follower.avatar_url}}\" alt=\"Generic placeholder image\">\n      </a>\n      <div  class=\"media-body\">\n        <h4 class=\"media-heading\">{{follower.login}}</h4>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: [
                        ".avatar{\n\t\t\t\twidth:\t100;\n\t\t\t\theight:\t100;\n\t\t\t\tborder-radius:\t100%;\n                }"
                    ]
                }),
                __metadata("design:paramtypes", [post_service_1.PostService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.componentRX.js.map