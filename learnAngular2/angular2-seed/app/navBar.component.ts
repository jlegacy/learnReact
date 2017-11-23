import {Component} from 'angular2/core';
import { Route, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
 
@Component({
    selector: 'navbar',
    templateUrl: '/app/navBar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent {

    constructor(private router: Router) { }

    isActive(instruction: any[]): boolean {
        return this.router.isRouteActive(this.router.generate(instruction));
    }

}