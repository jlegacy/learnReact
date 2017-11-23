import {Component} from 'angular2/core'


@Component({
    selector: 'tweet',
    template: `<div (click)="toggleMe($event)" class="glyphicon glyphicon" [class.glyphicon-star] = "toggle"  [class.glyphicon-star-empty] = "!toggle"></div>`
    
})
export class
    StarComponent {
    toggle = false;

    toggleMe() {
        this.toggle = this.toggle ? false : true;
    }
}
