export class TweetService {
    getTweets() {
        type MyType = 
            {
                imageLink: string
                author: string;
                twitterHandle: string;
                message: string;
                numberOfLikes: number;
            }

        var arr = [];

       // var myObj: MyType = {author:"", twitterHandle:"", message:"",numberOfLikes:0};
        var myObj =  <MyType>{};
        myObj.imageLink = "http://lorempixel.com/100/100/people/?1";
        myObj.author = 'Windwards';
        myObj.twitterHandle = 'windwardstudios';
        myObj.message = 'Looking for a better company reporting or docgen app?';
        myObj.numberOfLikes = 0;
        arr.push(myObj);

        var myObj = <MyType>{};
        myObj.imageLink = "http://lorempixel.com/100/100/people/?2";
        myObj.author = 'Angular JS News';
        myObj.twitterHandle = 'angularjs_news';
        myObj.message = 'Fight Relevance: Influence, Articles Conversations';
        myObj.numberOfLikes = 5;
        arr.push(myObj);

        var myObj = <MyType>{};
        myObj.imageLink = "http://lorempixel.com/100/100/people/?3";
        myObj.author = 'UX & Bootstrap';
        myObj.twitterHandle = '3rdWave';
        myObj.message = '10 Reasons Why Web Projects Fail';
        myObj.numberOfLikes = 1;
        arr.push(myObj);

        return arr;
    }
}