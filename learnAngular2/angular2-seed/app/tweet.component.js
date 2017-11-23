System.register(["angular2/core", "./tweet.service", "./favorite.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, tweet_service_1, favorite_component_1, TweetComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            }
        ],
        execute: function () {
            TweetComponent = (function () {
                function TweetComponent(tweetService) {
                    this.tweets = [];
                    this.tweets = tweetService.getTweets();
                }
                return TweetComponent;
            }());
            TweetComponent = __decorate([
                core_1.Component({
                    selector: 'tweet',
                    template: "\n        <ul class=\"media-list\">\n            <li *ngFor=\"#tweet\tof\ttweets\" class=\"media\">\n                <div class=\"media-left\">\n                    <a href=\"#\">\n                        <img class=\"media-object\" src=\"{{tweet.imageLink}}\">\n                    </a>\n                </div>\n            <div class=\"media-body\">\n                    <div><h4 class=\"media-heading float-left\">{{tweet.author}}</h4><label class=\"float-left label\">@{{tweet.twitterHandle}}</label></div>\n                    <div class=\"clear-float\">{{tweet.message}}</div>\n                    <favorite [myCounter]=tweet.numberOfLikes></favorite>\n            </div>\n            </li>\n        </ul>\n        ",
                    directives: [favorite_component_1.FavoriteComponent],
                    styles: [
                        "\n        .float-left {float:left;}\n        .clear-float {clear:both;}\n        .label {color:gray}\n        "
                    ],
                    providers: [tweet_service_1.TweetService]
                }),
                __metadata("design:paramtypes", [tweet_service_1.TweetService])
            ], TweetComponent);
            exports_1("TweetComponent", TweetComponent);
        }
    };
});
//# sourceMappingURL=tweet.component.js.map