System.register(["angular2/core", "./authors.service"], function (exports_1, context_1) {
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
    var core_1, authors_service_1, AuthorsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authors_service_1_1) {
                authors_service_1 = authors_service_1_1;
            }
        ],
        execute: function () {
            AuthorsComponent = (function () {
                function AuthorsComponent(authorService) {
                    this.title = "List of Authors";
                    this.authors = [];
                    this.authors = authorService.getAuthors();
                }
                return AuthorsComponent;
            }());
            AuthorsComponent = __decorate([
                core_1.Component({
                    selector: 'authors',
                    template: "<h2>Authors</h2>\n                {{\ttitle\t}}\t\n                <ul>\n\t\t\t\t\t<li\t*ngFor=\"#author\tof\tauthors\">\n\t\t\t\t\t\t\t\t\t{{\tauthor\t}}\n\t\t\t\t\t</li>\t\n                </ul>",
                    providers: [authors_service_1.AuthorService]
                }),
                __metadata("design:paramtypes", [authors_service_1.AuthorService])
            ], AuthorsComponent);
            exports_1("AuthorsComponent", AuthorsComponent);
        }
    };
});
//# sourceMappingURL=authors.component.js.map