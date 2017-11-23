System.register(["angular2/core", "angular2/http", "angular2/router", "../users/users.service", "rxjs/Observable", "../shared/spinner.component", "../users/usersDropList.component", "../shared/paging.component", "rxjs/add/operator/debounceTime", "rxjs/add/observable/range", "rxjs/add/observable/throw", "rxjs/add/operator/catch", "rxjs/add/observable/forkJoin", "rxjs/add/operator/retry", "rxjs/add/operator/timeout", "rxjs/add/operator/delay", "rxjs/add/operator/mergeMap", "rxjs/add/observable/interval", "rxjs/add/operator/map"], function (exports_1, context_1) {
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
    var core_1, http_1, router_1, users_service_1, Observable_1, spinner_component_1, usersDropList_component_1, paging_component_1, PostsComponent;
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
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (usersDropList_component_1_1) {
                usersDropList_component_1 = usersDropList_component_1_1;
            },
            function (paging_component_1_1) {
                paging_component_1 = paging_component_1_1;
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
            PostsComponent = (function () {
                function PostsComponent(_usersService, router) {
                    this._usersService = _usersService;
                    this.router = router;
                    this.postsList = [];
                    this.commentsList = [];
                    this.postDetail = {};
                    this.completePostList = [];
                }
                PostsComponent.prototype.myUserChange = function (event) {
                    var _this = this;
                    this.showPagination = false;
                    this.postLoading = true;
                    if (event.value === '0') {
                        var postsList = this._usersService.getPosts('https://jsonplaceholder.typicode.com/posts');
                    }
                    else {
                        var postsList = this._usersService.getPosts('https://jsonplaceholder.typicode.com/posts?userId=' + event.value);
                    }
                    Observable_1.Observable
                        .forkJoin(postsList)
                        .map(function (joined) { return new Object({ post: joined[0] }); })
                        .subscribe(function (result) { return _this.setPosts(result); }, function (error) { return console.error(error); });
                };
                PostsComponent.prototype.myPageChange = function (event) {
                    var start = 0;
                    var end = 0;
                    end = event.page * 10;
                    start = end - 10;
                    this.postsList = _.take(_.rest(this.completePostList, start), this.pageSize);
                    //  this.postsList = this.completePostList.slice(start, end);
                    this.hideDetailsComments();
                };
                PostsComponent.prototype.hideDetailsComments = function () {
                    this.showDetail = false;
                    this.showComment = false;
                };
                PostsComponent.prototype.setPosts = function (result) {
                    this.hideDetailsComments();
                    this.currentPost = null;
                    this.completePostList = result.post;
                    this.postsList = result.post;
                    this.postLoading = false;
                    this.showPagination = false;
                    if (this.completePostList.length > 10) {
                        this.showPagination = true;
                    }
                    this.postsList = _.take(this.completePostList, this.pageSize);
                };
                PostsComponent.prototype.setDetails = function (result, id) {
                    this.postDetail = result.post;
                    this.postLoading = false;
                    this.showDetail = true;
                    this.showComments(id);
                };
                PostsComponent.prototype.setComments = function (result) {
                    this.commentsList = result.post;
                    this.commentLoading = false;
                    this.showComment = true;
                };
                PostsComponent.prototype.showDetails = function (id) {
                    var _this = this;
                    this.postLoading = true;
                    this.showDetail = false;
                    this.currentPost = id;
                    var postsList = this._usersService.getPosts('https://jsonplaceholder.typicode.com/posts/' + id);
                    Observable_1.Observable
                        .forkJoin(postsList)
                        .map(function (joined) { return new Object({ post: joined[0] }); })
                        .subscribe(function (result) { return _this.setDetails(result, id); }, function (error) { return console.error(error); });
                };
                PostsComponent.prototype.showComments = function (id) {
                    var _this = this;
                    this.commentLoading = true;
                    this.showComment = false;
                    this.currentPost = id;
                    var postsList = this._usersService.getPosts('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
                    Observable_1.Observable
                        .forkJoin(postsList)
                        .map(function (joined) { return new Object({ post: joined[0] }); })
                        .subscribe(function (result) { return _this.setComments(result); }, function (error) { return console.error(error); });
                };
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.currentPage = 1;
                    this.postLoading = true;
                    this.showDetail = false;
                    this.showComment = false;
                    this.postLoading = false;
                    this.commentLoading = false;
                    this.currentPost = null;
                    this.showPagination = false;
                    this.pageSize = 10;
                    var postsList = this._usersService.getPosts('https://jsonplaceholder.typicode.com/posts');
                    Observable_1.Observable
                        .forkJoin(postsList)
                        .map(function (joined) { return new Object({ post: joined[0] }); })
                        .subscribe(function (result) { return _this.setPosts(result); }, function (error) { return console.error(error); });
                };
                return PostsComponent;
            }());
            PostsComponent = __decorate([
                core_1.Component({
                    providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                    directives: [spinner_component_1.SpinnerComponent, usersDropList_component_1.UsersDropListComponent, paging_component_1.PagingComponent],
                    styles: [
                        "\n        .posts li {\n            cursor: default;\n            }\n        .posts li:hover {\n             background: #ecf0f1;\n            }\n\n        .list-group-\u00ADitem.active,\n        .list\u00AD-group-\u00ADitem.active:hover,\n        .list-group\u2010item.active:focus {\n            background-\u00ADcolor: #ecf0f1;\n            border\u00AD\u2010color: #ecf0f1;\n            color: #2c3e50;\n            }\n\n        img.media-object{\n            border-radius:100px;\n        }\n\n        .glyphicon-edit{\n            color:green;\n        }\n        .glyphicon-edit:hover{\n            cursor:pointer;\n            color:DarkSeaGreen;\n        }\n        .glyphicon-remove{\n            color:red;\n        }\n\n        .glyphicon-remove:hover{\n            cursor:pointer;\n            color:Crimson ;\n        }"
                    ],
                    template: "\n        <h1>Posts</h1>\n        <spinner [visible]=\"postLoading\"></spinner>\n        \n        <div class=\"col-md-6\">\n            <pagination *ngIf=\"showPagination\" [items]=\"completePostList\" (pageChange)=\"myPageChange($event)\"></pagination>\n            <usersDropList (userChange)=\"myUserChange($event)\"></usersDropList>\n            <ul class=\"list-group posts\">\n                <li (click)=\"showDetails(post.id)\" [class.active]=\"currentPost === post.id\" *ngFor=\"#post of postsList\" class=\"list-group-item\">{{post.title}}</li>\n            </ul>\n        </div>\n        <div class=\"col-md-6\">\n          \n            <div *ngIf=\"showDetail\" class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">{{postDetail.title}}</h3>\n                </div>\n                <div class=\"panel-body\">\n                        {{postDetail.body}}\n                </div>\n            </div>\n\n            <div *ngIf=\"showComment\">\n             <spinner [visible]=\"commentLoading\"></spinner>\n\n                <div  *ngFor=\"#comment of commentsList\" class=\"media\">\n                <div class=\"media-left\">\n                <a href=\"#\">\n                    <img class=\"media-object\" src=\"http://lorempixel.com/80/80/people/{{comment.id}}\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n            <h4 class=\"media-heading\">{{comment.name}}</h4>\n            <p>{{comment.body}}</p>\n    \n            </div>\n            </div>\n\n\n\n            </div>\n\n        </div>"
                }),
                __metadata("design:paramtypes", [users_service_1.UsersService, router_1.Router])
            ], PostsComponent);
            exports_1("PostsComponent", PostsComponent);
        }
    };
});
//# sourceMappingURL=posts.component.js.map