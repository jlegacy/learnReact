export class ZippyService {
    getZippys() {
        type MyType = 
            {
                title: string
                content: string[];
            }

        var arr = [];

       // var myObj: MyType = {author:"", twitterHandle:"", message:"",numberOfLikes:0};
        var myObj =  <MyType>{};
        myObj.title = "Who Can See My Stuff";
        myObj.content = [];
        myObj.content.push("I can see your stuff!");
        myObj.content.push("I can see your stuff too!");
        arr.push(myObj);

        var myObj = <MyType>{};
        myObj.title = "Who Can Contact Me?";
        myObj.content = [];
        myObj.content.push("I can contact you!");
        myObj.content.push("I can contact you too!");
        arr.push(myObj);

        return arr;
    }
}