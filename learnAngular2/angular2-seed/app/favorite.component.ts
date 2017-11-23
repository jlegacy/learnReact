import {Component, Input, Output, EventEmitter} from 'angular2/core'


@Component({
    selector: 'favorite',
    template: `
        <span (click)="toggleMe($event)"
            class="glyphicon glyphicon-heart" [class.lightGray] = "!isFavorite"  [class.pink] = "isFavorite">
        </span>
        <span>
            <label>{{myCounter}}</label>
        </span>
        `,
    styles:[
        `.lightGray{
            color:#ccc
           }
          .pink{
            color:deepPink
            }` ]
    
})
export class
    FavoriteComponent {
    @Input() isFavorite = false;
    @Input() myCounter = 0;

    toggleMe() {
        this.isFavorite = this.isFavorite ? false : true;
        this.myCounter += this.isFavorite ? 1 : -1;
    }
}
