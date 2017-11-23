System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, StarComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            StarComponent = (function () {
                function StarComponent() {
                    this.toggle = false;
                }
                StarComponent.prototype.toggleMe = function () {
                    this.toggle = this.toggle ? false : true;
                };
                return StarComponent;
            }());
            StarComponent = __decorate([
                core_1.Component({
                    selector: 'tweet',
                    template: "<div (click)=\"toggleMe($event)\" class=\"glyphicon glyphicon\" [class.glyphicon-star] = \"toggle\"  [class.glyphicon-star-empty] = \"!toggle\"></div>"
                })
            ], StarComponent);
            exports_1("StarComponent", StarComponent);
        }
    };
});
//# sourceMappingURL=star.component.js.map