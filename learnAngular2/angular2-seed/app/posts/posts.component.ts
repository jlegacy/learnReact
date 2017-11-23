import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams} from 'angular2/router';
import {Router} from 'angular2/router';
import {UsersService} from '../users/users.service';
import {Observable} from 'rxjs/Observable';
import {SpinnerComponent} from '../shared/spinner.component';
import {UsersDropListComponent} from '../users/usersDropList.component';
import {PagingComponent} from '../shared/paging.component';
import 'rxjs/add/operator/debounceTime';
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
    providers: [UsersService, HTTP_PROVIDERS],
    directives: [SpinnerComponent, UsersDropListComponent, PagingComponent],
    styles: [
        `
        .posts li {
            cursor: default;
            }
        .posts li:hover {
             background: #ecf0f1;
            }

        .list-group-­item.active,
        .list­-group-­item.active:hover,
        .list-group‐item.active:focus {
            background-­color: #ecf0f1;
            border­‐color: #ecf0f1;
            color: #2c3e50;
            }

        img.media-object{
            border-radius:100px;
        }

        .glyphicon-edit{
            color:green;
        }
        .glyphicon-edit:hover{
            cursor:pointer;
            color:DarkSeaGreen;
        }
        .glyphicon-remove{
            color:red;
        }

        .glyphicon-remove:hover{
            cursor:pointer;
            color:Crimson ;
        }`


    ],
    template: `
        <h1>Posts</h1>
        <spinner [visible]="postLoading"></spinner>
        
        <div class="col-md-6">
            <pagination *ngIf="showPagination" [items]="completePostList" (pageChange)="myPageChange($event)"></pagination>
            <usersDropList (userChange)="myUserChange($event)"></usersDropList>
            <ul class="list-group posts">
                <li (click)="showDetails(post.id)" [class.active]="currentPost === post.id" *ngFor="#post of postsList" class="list-group-item">{{post.title}}</li>
            </ul>
        </div>
        <div class="col-md-6">
          
            <div *ngIf="showDetail" class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">{{postDetail.title}}</h3>
                </div>
                <div class="panel-body">
                        {{postDetail.body}}
                </div>
            </div>

            <div *ngIf="showComment">
             <spinner [visible]="commentLoading"></spinner>

                <div  *ngFor="#comment of commentsList" class="media">
                <div class="media-left">
                <a href="#">
                    <img class="media-object" src="http://lorempixel.com/80/80/people/{{comment.id}}" alt="">
                </a>
            </div>
            <div class="media-body">
            <h4 class="media-heading">{{comment.name}}</h4>
            <p>{{comment.body}}</p>
    
            </div>
            </div>



            </div>

        </div>`
})

export class PostsComponent implements OnInit {
    id;
    date;
    postsList = [];
    commentsList = [];
    postDetail = {};
    showDetail;
    showComment;
    postLoading;
    commentLoading;
    currentPost;
    showPagination;
    completePostList = [];
    currentPage;
    pageSize;

    constructor(private _usersService: UsersService, private router: Router) {
    }

    myUserChange(event) {
        this.showPagination = false;
        this.postLoading = true;
        if (event.value === '0') {
            var postsList = this._usersService.getPosts('https://jsonplaceholder.typicode.com/posts');
        }
        else {
            var postsList = this._usersService.getPosts('https://jsonplaceholder.typicode.com/posts?userId=' + event.value);
        }

        Observable
            .forkJoin(postsList)
            .map(joined => new Object({ post: joined[0] }))
            .subscribe(result => this.setPosts(result), error => console.error(error));

    }

    myPageChange(event) {
        var start = 0;
        var end = 0;
        end = event.page * 10;
        start = end - 10;

        this.postsList = _.take(_.rest(this.completePostList, start), this.pageSize);

      //  this.postsList = this.completePostList.slice(start, end);
        this.hideDetailsComments();
    }

    hideDetailsComments() {
        this.showDetail = false;
        this.showComment = false;
    }

    setPosts(result) {
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

    }

    setDetails(result, id) {
        this.postDetail = result.post;
        this.postLoading = false;
        this.showDetail = true;
        this.showComments(id);
    }

    setComments(result) {
        this.commentsList = result.post;
        this.commentLoading = false;
        this.showComment = true;
    }

    showDetails(id) {

        this.postLoading = true;
        this.showDetail = false;
        this.currentPost = id;
        var postsList = this._usersService.getPosts('https://jsonplaceholder.typicode.com/posts/' + id);
        Observable
            .forkJoin(postsList)
            .map(joined => new Object({ post: joined[0] }))
            .subscribe(result => this.setDetails(result, id), error => console.error(error));
    }

    showComments(id) {

        this.commentLoading = true;
        this.showComment = false;
        this.currentPost = id;
        var postsList = this._usersService.getPosts('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
        Observable
            .forkJoin(postsList)
            .map(joined => new Object({ post: joined[0] }))
            .subscribe(result => this.setComments(result), error => console.error(error));
    }


    ngOnInit() {
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
        Observable
            .forkJoin(postsList)
            .map(joined => new Object({ post: joined[0] }))
            .subscribe(result => this.setPosts(result), error => console.error(error));
    }


}
    