System.register(["angular2/core", "./courses.service"], function (exports_1, context_1) {
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
    var core_1, courses_service_1, CoursesComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            }
        ],
        execute: function () {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.title = "List of Courses";
                    this.courses = [];
                    this.courses = courseService.getCourses();
                }
                return CoursesComponent;
            }());
            CoursesComponent = __decorate([
                core_1.Component({
                    selector: 'courses',
                    template: "<h2>Courses</h2>\n                {{\ttitle\t}}\t\n                <ul>\n\t\t\t\t\t<li\t*ngFor=\"#course\tof\tcourses\">\n\t\t\t\t\t\t\t\t\t{{\tcourse\t}}\n\t\t\t\t\t</li>\t\n                </ul>",
                    providers: [courses_service_1.CourseService]
                }),
                __metadata("design:paramtypes", [courses_service_1.CourseService])
            ], CoursesComponent);
            exports_1("CoursesComponent", CoursesComponent);
        }
    };
});
//# sourceMappingURL=courses.component.js.map