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
    var core_1, ZipLineComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ZipLineComponent = (function () {
                function ZipLineComponent() {
                    this.myZippy = {};
                    this.zippys = [];
                    this.isHidden = true;
                    this.isActive = false;
                }
                ZipLineComponent.prototype.hideMessage = function (evt) {
                    this.isHidden = true;
                    this.isActive = false;
                };
                ZipLineComponent.prototype.showMessage = function (evt) {
                    this.isHidden = false;
                    this.isActive = true;
                };
                return ZipLineComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], ZipLineComponent.prototype, "myZippy", void 0);
            ZipLineComponent = __decorate([
                core_1.Component({
                    selector: 'zipline',
                    template: "\n            \n                <div class=\"outer\">\n                    <div>{{myZippy.title}} \n                        <span *ngIf = \"isActive\" (click)=\"hideMessage($event)\" class=\"pull-right glyphicon glyphicon-chevron-up\" aria-hidden=\"true\"></span>\n                        <span *ngIf = \"isHidden\" (click)=\"showMessage($event)\" class=\"pull-right glyphicon glyphicon-chevron-down\" aria-hidden=\"true\"></span>\n                     </div>\n                        <ul [ngClass]=\"{\n                                active: isActive,\n                                hidden: isHidden\n                            }\" *ngFor=\"#zippyContent of myZippy.content\">\n                            <li>  {{zippyContent}} </li>\n                        </ul>\n                </div>\n\n        ",
                    styles: [
                        "\n        .outer {width:400px; border:1px solid black; border-radius:3px;}\n        .active {color:orange;}\n        .hidden {display:none;}\n        "
                    ],
                })
            ], ZipLineComponent);
            exports_1("ZipLineComponent", ZipLineComponent);
        }
    };
});
//# sourceMappingURL=zippyLine.component.js.map