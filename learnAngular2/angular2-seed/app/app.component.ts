import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {HomeComponent} from './home.component';
import {NavBarComponent} from './navbar.component';
import {UpSertUserComponent} from './upsertUser.component';
import {DeleteUserComponent} from './deleteUser.component';
import {NotFoundComponent} from './notFound.component';
import {RouteParams} from 'angular2/router';
import {FavoriteComponent} from './favorite.component'

@RouteConfig([

    { path: '/users', name: 'Users', component: UsersComponent },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/upsertUser', name: 'UpSertUser', component: UpSertUserComponent },
    { path: '/deleteUser', name: 'DeleteUser', component: DeleteUserComponent },
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/notFound', name: 'NotFound', component: NotFoundComponent }

])

@Component({
    selector: 'my-app',
    template: `
        <favorite></favorite>
        <navbar></navbar>
        <router-outlet></router-outlet>`,
    directives: [NavBarComponent, ROUTER_DIRECTIVES, FavoriteComponent],
    providers:[RouteParams]
})
export class AppComponent {

}

