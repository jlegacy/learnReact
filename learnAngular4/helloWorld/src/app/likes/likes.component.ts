import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'likes',
    templateUrl: './likes.component.html',
    styleUrls: ['./likes.component.css'],
})
export class LikesComponent {
    @Input() likes;
    @Input() isFavorite;
    @Output('changeMe') change: EventEmitter<number> = new EventEmitter<number>();

     toggleMe() {
       this.change.emit();
    }
   
   
}

