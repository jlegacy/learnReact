import {ControlGroup, FormBuilder} from 'angular2/common';
import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {PostService} from './posts/post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromArray';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
    providers: [PostService, HTTP_PROVIDERS],
    selector: 'my-app',
    template: `
    <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
      <div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object avatar" src="{{tweetObjectUser.avatar_url}}" alt="Generic placeholder image">
    </a>
  </div>
  
  <div class="media-body">
    <h4 class="media-heading">{{tweetObjectUser.name}}</h4>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    <div *ngFor="#follower of tweetObjectFollowers" class="media mt-2">
      <a class="media-left" href="#">
        <img class="media-object avatar" src="{{follower.avatar_url}}" alt="Generic placeholder image">
      </a>
      <div  class="media-body">
        <h4 class="media-heading">{{follower.login}}</h4>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  </div>
</div>`,

    styles: [
        `.avatar{
				width:	100;
				height:	100;
				border-radius:	100%;
                }` 
            ]

})

export class AppComponent implements OnInit {
    post: any[];
    tweetObjectUser = {};
    tweetObjectFollowers = [];
    isLoading = true;

    
    constructor(private _postService: PostService) {
    }

    setVariables(result){
       console.log(result);
        this.tweetObjectUser = result.user;
        this.tweetObjectFollowers = result.followers;
        this.isLoading = false;
    }

    ngOnInit() {
        
        var userStream = this._postService.getPosts('https://api.github.com/users/octocat');
        var followerStream = this._postService.getPosts('https://api.github.com/users/octocat/followers').delay(3000);
    
        Observable
            
            .forkJoin(userStream, followerStream)
            .map(joined => new Object({ user: joined[0], followers: joined[1] }))
            .subscribe(result => this.setVariables(result), error => console.error(error));
            
    }
}




