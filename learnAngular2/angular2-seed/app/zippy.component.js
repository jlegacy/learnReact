System.register(["angular2/core", "./zippy.service", "./zippyLine.component"], function (exports_1, context_1) {
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
    var core_1, zippy_service_1, zippyLine_component_1, ZippyComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (zippy_service_1_1) {
                zippy_service_1 = zippy_service_1_1;
            },
            function (zippyLine_component_1_1) {
                zippyLine_component_1 = zippyLine_component_1_1;
            }
        ],
        execute: function () {
            ZippyComponent = (function () {
                function ZippyComponent(zippyService) {
                    this.zippys = [];
                    this.zippys = zippyService.getZippys();
                }
                return ZippyComponent;
            }());
            ZippyComponent = __decorate([
                core_1.Component({
                    selector: 'zippy',
                    template: "\n            <div  *ngFor=\"#zippy of zippys\">\n                 <zipline [myZippy]=zippy></zipline>\n            </div>\n        ",
                    directives: [zippyLine_component_1.ZipLineComponent],
                    providers: [zippy_service_1.ZippyService]
                }),
                __metadata("design:paramtypes", [zippy_service_1.ZippyService])
            ], ZippyComponent);
            exports_1("ZippyComponent", ZippyComponent);
        }
    };
});
//# sourceMappingURL=zippy.component.js.map