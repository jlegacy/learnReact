System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ZippyService;
    return {
        setters: [],
        execute: function () {
            ZippyService = (function () {
                function ZippyService() {
                }
                ZippyService.prototype.getZippys = function () {
                    var arr = [];
                    // var myObj: MyType = {author:"", twitterHandle:"", message:"",numberOfLikes:0};
                    var myObj = {};
                    myObj.title = "Who Can See My Stuff";
                    myObj.content = [];
                    myObj.content.push("I can see your stuff!");
                    myObj.content.push("I can see your stuff too!");
                    arr.push(myObj);
                    var myObj = {};
                    myObj.title = "Who Can Contact Me?";
                    myObj.content = [];
                    myObj.content.push("I can contact you!");
                    myObj.content.push("I can contact you too!");
                    arr.push(myObj);
                    return arr;
                };
                return ZippyService;
            }());
            exports_1("ZippyService", ZippyService);
        }
    };
});
//# sourceMappingURL=zippy.service.js.map