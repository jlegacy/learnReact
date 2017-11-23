import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {TweetService} from './tweet.service';
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'tweet',
    template: `
        <ul class="media-list">
            <li *ngFor="#tweet	of	tweets" class="media">
                <div class="media-left">
                    <a href="#">
                        <img class="media-object" src="{{tweet.imageLink}}">
                    </a>
                </div>
            <div class="media-body">
                    <div><h4 class="media-heading float-left">{{tweet.author}}</h4><label class="float-left label">@{{tweet.twitterHandle}}</label></div>
                    <div class="clear-float">{{tweet.message}}</div>
                    <favorite [myCounter]=tweet.numberOfLikes></favorite>
            </div>
            </li>
        </ul>
        `,
    directives: [FavoriteComponent],
    styles: [
        `
        .float-left {float:left;}
        .clear-float {clear:both;}
        .label {color:gray}
        `
    ],
    providers: [TweetService]
})
export class


    TweetComponent {
    tweets = [];
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }

}
