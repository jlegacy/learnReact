import {Component, Input, Output, EventEmitter} from 'angular2/core'



@Component({
    selector: 'voter',
    template: `
        <div (click)="clickUp($event)" class="glyphicon glyphicon-menu-up pointer" [class.orange] = "myVote == 1"></div>
        <div><label>{{voteCount + myVote}}</label></div>
        <div (click)="clickDown($event)" class="glyphicon glyphicon-menu-down pointer" [class.orange] = "myVote == -1"></div>
        `,
    styles: [
        `.pointer{
            cursor:pointer
           }
         .orange{
            color:orange;
        }`]
})
export class
    VoterComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;
    @Output() vote = new EventEmitter();

    clickUp() {
        if (this.myVote == 1)
            return;
        this.myVote++;
        this.vote.emit({ myVote: this.myVote });
    }

    clickDown() {
        if (this.myVote == -1)
            return;
        this.myVote--;
        this.vote.emit({ myVote: this.myVote });
    }
}
