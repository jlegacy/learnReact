System.register(["angular2/core"], function (exports_1, context_1) {
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
    var core_1, FavoriteComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            FavoriteComponent = (function () {
                function FavoriteComponent() {
                    this.isFavorite = false;
                    this.myCounter = 0;
                }
                FavoriteComponent.prototype.toggleMe = function () {
                    this.isFavorite = this.isFavorite ? false : true;
                    this.myCounter += this.isFavorite ? 1 : -1;
                };
                return FavoriteComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], FavoriteComponent.prototype, "isFavorite", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], FavoriteComponent.prototype, "myCounter", void 0);
            FavoriteComponent = __decorate([
                core_1.Component({
                    selector: 'favorite',
                    template: "\n        <span (click)=\"toggleMe($event)\"\n            class=\"glyphicon glyphicon-heart\" [class.lightGray] = \"!isFavorite\"  [class.pink] = \"isFavorite\">\n        </span>\n        <span>\n            <label>{{myCounter}}</label>\n        </span>\n        ",
                    styles: [
                        ".lightGray{\n            color:#ccc\n           }\n          .pink{\n            color:deepPink\n            }"
                    ]
                })
            ], FavoriteComponent);
            exports_1("FavoriteComponent", FavoriteComponent);
        }
    };
});
//# sourceMappingURL=favorite.component.js.map