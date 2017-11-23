System.register(["angular2/core", "angular2/router", "./users/users.component", "./posts/posts.component", "./home.component", "./navbar.component", "./upsertUser.component", "./deleteUser.component", "./notFound.component", "./favorite.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, users_component_1, posts_component_1, home_component_1, navbar_component_1, upsertUser_component_1, deleteUser_component_1, notFound_component_1, router_2, favorite_component_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (upsertUser_component_1_1) {
                upsertUser_component_1 = upsertUser_component_1_1;
            },
            function (deleteUser_component_1_1) {
                deleteUser_component_1 = deleteUser_component_1_1;
            },
            function (notFound_component_1_1) {
                notFound_component_1 = notFound_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                router_1.RouteConfig([
                    { path: '/users', name: 'Users', component: users_component_1.UsersComponent },
                    { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent },
                    { path: '/upsertUser', name: 'UpSertUser', component: upsertUser_component_1.UpSertUserComponent },
                    { path: '/deleteUser', name: 'DeleteUser', component: deleteUser_component_1.DeleteUserComponent },
                    { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                    { path: '/notFound', name: 'NotFound', component: notFound_component_1.NotFoundComponent }
                ]),
                core_1.Component({
                    selector: 'my-app',
                    template: "\n        <favorite></favorite>\n        <navbar></navbar>\n        <router-outlet></router-outlet>",
                    directives: [navbar_component_1.NavBarComponent, router_1.ROUTER_DIRECTIVES, favorite_component_1.FavoriteComponent],
                    providers: [router_2.RouteParams]
                })
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map