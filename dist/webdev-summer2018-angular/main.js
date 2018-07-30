(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hello-world/hello-world.component */ "./src/app/hello-world/hello-world.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/course-navigator.service.client */ "./src/app/services/course-navigator.service.client.ts");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./module-list/module-list.component */ "./src/app/module-list/module-list.component.ts");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/module.service.client */ "./src/app/services/module.service.client.ts");
/* harmony import */ var _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lesson-tabs/lesson-tabs.component */ "./src/app/lesson-tabs/lesson-tabs.component.ts");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _enroll_enroll_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./enroll/enroll.component */ "./src/app/enroll/enroll.component.ts");
/* harmony import */ var _update_section_list_update_section_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./update-section-list/update-section-list.component */ "./src/app/update-section-list/update-section-list.component.ts");
/* harmony import */ var _enroll_list_enroll_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./enroll-list/enroll-list.component */ "./src/app/enroll-list/enroll-list.component.ts");
/* harmony import */ var _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./quiz-list/quiz-list.component */ "./src/app/quiz-list/quiz-list.component.ts");
/* harmony import */ var _quiz_submissions_quiz_submissions_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./quiz-submissions/quiz-submissions.component */ "./src/app/quiz-submissions/quiz-submissions.component.ts");
/* harmony import */ var _quiz_answers_quiz_answers_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./quiz-answers/quiz-answers.component */ "./src/app/quiz-answers/quiz-answers.component.ts");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
/* harmony import */ var _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./quiz-taker/quiz-taker.component */ "./src/app/quiz-taker/quiz-taker.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _noSanitize_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./noSanitize.pipe */ "./src/app/noSanitize.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_3__["HelloWorldComponent"],
                _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__["CourseNavigatorComponent"],
                _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_7__["WhiteBoardComponent"],
                _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_8__["CourseGridComponent"],
                _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_11__["CourseViewerComponent"],
                _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_12__["ModuleListComponent"],
                _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_14__["LessonTabsComponent"],
                _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_16__["WidgetListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_22__["SectionListComponent"],
                _enroll_enroll_component__WEBPACK_IMPORTED_MODULE_24__["EnrollComponent"],
                _update_section_list_update_section_list_component__WEBPACK_IMPORTED_MODULE_25__["UpdateSectionListComponent"],
                _enroll_list_enroll_list_component__WEBPACK_IMPORTED_MODULE_26__["EnrollListComponent"],
                _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_27__["QuizListComponent"],
                _quiz_submissions_quiz_submissions_component__WEBPACK_IMPORTED_MODULE_28__["QuizSubmissionsComponent"],
                _quiz_answers_quiz_answers_component__WEBPACK_IMPORTED_MODULE_29__["QuizAnswersComponent"],
                _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_31__["QuizTakerComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_32__["FilterPipe"],
                _noSanitize_pipe__WEBPACK_IMPORTED_MODULE_33__["NoSanitizePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["routing"]
            ],
            providers: [
                _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_5__["CourseNavigatorServiceClient"],
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_9__["CourseServiceClient"],
                _services_module_service_client__WEBPACK_IMPORTED_MODULE_13__["ModuleServiceClient"],
                _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_15__["LessonServiceClient"],
                _services_widget_service_client__WEBPACK_IMPORTED_MODULE_17__["WidgetServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserServiceClient"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_23__["SectionServiceClient"],
                _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_30__["QuizServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _enroll_enroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enroll/enroll.component */ "./src/app/enroll/enroll.component.ts");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz-list/quiz-list.component */ "./src/app/quiz-list/quiz-list.component.ts");
/* harmony import */ var _quiz_submissions_quiz_submissions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz-submissions/quiz-submissions.component */ "./src/app/quiz-submissions/quiz-submissions.component.ts");
/* harmony import */ var _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz-taker/quiz-taker.component */ "./src/app/quiz-taker/quiz-taker.component.ts");
/* harmony import */ var _quiz_answers_quiz_answers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quiz-answers/quiz-answers.component */ "./src/app/quiz-answers/quiz-answers.component.ts");












var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'quizzes', component: _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_8__["QuizListComponent"] },
    { path: 'quiz/:quizId', component: _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_10__["QuizTakerComponent"] },
    { path: 'quiz/:quizId/submissions', component: _quiz_submissions_quiz_submissions_component__WEBPACK_IMPORTED_MODULE_9__["QuizSubmissionsComponent"] },
    { path: 'quiz/:quizId/submission/:submissionId', component: _quiz_answers_quiz_answers_component__WEBPACK_IMPORTED_MODULE_11__["QuizAnswersComponent"] },
    { path: 'admin', component: _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_7__["CourseNavigatorComponent"] },
    { path: 'admin/course/:courseId', component: _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_7__["CourseNavigatorComponent"] },
    { path: 'admin/course/:courseId/add', component: _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_7__["CourseNavigatorComponent"] },
    { path: 'admin/course/:courseId/section/:sectionId', component: _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_7__["CourseNavigatorComponent"] },
    { path: 'course/:courseId/enroll', component: _enroll_enroll_component__WEBPACK_IMPORTED_MODULE_6__["EnrollComponent"] },
    { path: 'course/:courseId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: '**', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-grid/course-grid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  margin-bottom: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Course Grid ({{courses.length}})</h2>\n\n<div class=\"row\">\n  <div *ngFor=\"let course of courses\" class=\"col-sm-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{course.title}}</h5>\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n        <a routerLink=\"/course/{{course.id}}\"\n           class=\"btn btn-primary\">View Course</a>\n        <a routerLink=\"/course/{{course.id}}/enroll\"\n           class=\"btn btn-primary ml-2\">Enroll</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.ts ***!
  \******************************************************/
/*! exports provided: CourseGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponent", function() { return CourseGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseGridComponent = /** @class */ (function () {
    function CourseGridComponent(courseService) {
        this.courseService = courseService;
        this.courses = [];
    }
    CourseGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-grid',
            template: __webpack_require__(/*! ./course-grid.component.html */ "./src/app/course-grid/course-grid.component.html"),
            styles: [__webpack_require__(/*! ./course-grid.component.css */ "./src/app/course-grid/course-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"]])
    ], CourseGridComponent);
    return CourseGridComponent;
}());



/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.html":
/*!******************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Course Navigator ({{courses.length}})</h1>\n\n  <div class=\"row\">\n    <div class=\"col-3\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">Courses</li>\n        <li *ngFor=\"let course of courses\"\n            (click)=\"findSectionsForCourse(course.id)\"\n            class=\"list-group-item\">\n          {{course.title}}\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-3\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">Sections</li>\n        <li *ngFor=\"let section of sections\"\n            class=\"list-group-item\">\n          <a routerLink=\"/admin/course/{{courseId}}/section/{{section._id}}\">{{section.name}}</a>\n          <span class=\"pull-right\"><i class=\"fa fa-trash\" (click)=\"removeSection(section._id)\"></i></span>\n        </li>\n        <li class=\"list-group-item\">\n          <i class=\"fa fa-plus\" (click)=\"addSection(courseId)\"></i>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-6\" [hidden]=\"!updateSection\">\n      <app-update-section-list></app-update-section-list>\n    </div>\n    <div class=\"col-6\" [hidden]=\"updateSection\">\n      <app-section-list></app-section-list>\n    </div>\n  </div>\n\n  <a routerLink=\"/home\">Home</a>\n  <a routerLink=\"/profile\" class=\"ml-2\">Profile</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.ts ***!
  \****************************************************************/
/*! exports provided: CourseNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorComponent", function() { return CourseNavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course-navigator.service.client */ "./src/app/services/course-navigator.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseNavigatorComponent = /** @class */ (function () {
    function CourseNavigatorComponent(service, route, router) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.courses = [];
        this.modules = [];
        this.sections = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    CourseNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseNavigatorComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.sectionId = params['sectionId'];
        if (this.courseId) {
            this.findSectionsForCourse(this.courseId);
        }
        if (this.sectionId) {
            console.log(this.sectionId);
            this.updateSection = true;
        }
    };
    CourseNavigatorComponent.prototype.selectCourse = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.service.findAllModulesForCourses(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    CourseNavigatorComponent.prototype.findSectionsForCourse = function (courseId) {
        var _this = this;
        this.service.findAllSectionsForCourse(courseId)
            .then(function (sections) { return _this.sections = sections; });
        if (this.router.url === '/admin') {
            this.router.navigateByUrl('/admin/course/' + courseId);
        }
    };
    CourseNavigatorComponent.prototype.removeSection = function (sectionId) {
        var _this = this;
        this.service.removeSection(sectionId)
            .then(function () {
            _this.findSectionsForCourse(_this.courseId);
        });
    };
    CourseNavigatorComponent.prototype.addSection = function (courseId) {
        var section = { name: courseId, courseId: courseId };
        console.log(section);
        this.updateSection = false;
        this.router.navigateByUrl('admin/course/' + courseId + '/add');
        /*    this.service.addSection(courseId, section)
              .then(() => this.findSectionsForCourse(courseId));*/
    };
    CourseNavigatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-navigator',
            template: __webpack_require__(/*! ./course-navigator.component.html */ "./src/app/course-navigator/course-navigator.component.html"),
            styles: [__webpack_require__(/*! ./course-navigator.component.css */ "./src/app/course-navigator/course-navigator.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseNavigatorServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CourseNavigatorComponent);
    return CourseNavigatorComponent;
}());



/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>{{course.title}} Course Information</h2>\n  <app-module-list></app-module-list>\n</div>\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _models_course_module_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/course.module.client */ "./src/app/models/course.module.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(route, courseService) {
        var _this = this;
        this.route = route;
        this.courseService = courseService;
        this.course = new _models_course_module_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
        this.route.params.subscribe(function (params) { return _this.loadCourse(params['courseId']); });
    }
    CourseViewerComponent.prototype.ngOnInit = function () {
    };
    CourseViewerComponent.prototype.loadCourse = function (courseId) {
        var _this = this;
        this.courseService.findCourseById(courseId)
            .then(function (course) { return _this.course = course; });
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-viewer',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/enroll-list/enroll-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/enroll-list/enroll-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/enroll-list/enroll-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/enroll-list/enroll-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4 mb-4\">\n  <h2>Enrolled Sections ({{sections.length}})</h2>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let enrollment of sections\" class=\"list-group-item\">\n      {{enrollment.section.name}}\n      ({{enrollment.section.seats}})\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/enroll-list/enroll-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/enroll-list/enroll-list.component.ts ***!
  \******************************************************/
/*! exports provided: EnrollListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollListComponent", function() { return EnrollListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnrollListComponent = /** @class */ (function () {
    function EnrollListComponent(sectionService) {
        this.sectionService = sectionService;
        this.sections = [];
    }
    EnrollListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sectionService
            .findSectionsForStudent()
            .then(function (sections) {
            console.log(sections);
            _this.sections = sections;
        });
    };
    EnrollListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enroll-list',
            template: __webpack_require__(/*! ./enroll-list.component.html */ "./src/app/enroll-list/enroll-list.component.html"),
            styles: [__webpack_require__(/*! ./enroll-list.component.css */ "./src/app/enroll-list/enroll-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_1__["SectionServiceClient"]])
    ], EnrollListComponent);
    return EnrollListComponent;
}());



/***/ }),

/***/ "./src/app/enroll/enroll.component.css":
/*!*********************************************!*\
  !*** ./src/app/enroll/enroll.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/enroll/enroll.component.html":
/*!**********************************************!*\
  !*** ./src/app/enroll/enroll.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Enroll in Course {{courseId}}</h1>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let section of sections\" class=\"list-group-item\">\n      {{section.name}} {{section.seats}}\n      <button (click)=\"enroll(section)\"\n              class=\"float-right btn btn-primary\">Enroll</button>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/enroll/enroll.component.ts":
/*!********************************************!*\
  !*** ./src/app/enroll/enroll.component.ts ***!
  \********************************************/
/*! exports provided: EnrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollComponent", function() { return EnrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnrollComponent = /** @class */ (function () {
    function EnrollComponent(service, route, router) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.sections = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    EnrollComponent.prototype.ngOnInit = function () {
    };
    EnrollComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.loadSections(this.courseId);
    };
    EnrollComponent.prototype.enroll = function (section) {
        var _this = this;
        if (section.seats == 0) {
            alert('You can not enroll because the section is at full capacity.');
        }
        else {
            this.service
                .enrollStudentInSection(section._id)
                .then(function () {
                _this.router.navigate(['profile']);
            });
        }
    };
    EnrollComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this
            .service
            .findSectionsForCourse(courseId)
            .then(function (sections) { return _this.sections = sections; });
    };
    EnrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enroll',
            template: __webpack_require__(/*! ./enroll.component.html */ "./src/app/enroll/enroll.component.html"),
            styles: [__webpack_require__(/*! ./enroll.component.css */ "./src/app/enroll/enroll.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_1__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EnrollComponent);
    return EnrollComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.username.toString().toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/hello-world/hello-world.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hello-world/hello-world.component.html":
/*!********************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{message}}</h1>\n\n<h2>Courses ({{courses.length}})</h2>\n\n<ul>\n  <li *ngFor=\"let course of courses\" class=\"list-item\" style=\"\">{{course.title}}\n    <button (click)=\"deleteCourse(course.id)\" class=\"btn btn-danger\">\n      Delete\n    </button>\n  </li>\n</ul>\n<!--<input [(ngModel)]=\"courseTitle\"/>-->\n<button\n  class=\"btn btn-success\"\n  (click)=\"addCourse(courseTitle)\">\n  Add Course\n</button>\n"

/***/ }),

/***/ "./src/app/hello-world/hello-world.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.ts ***!
  \******************************************************/
/*! exports provided: HelloWorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldComponent", function() { return HelloWorldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloWorldComponent = /** @class */ (function () {
    function HelloWorldComponent() {
        this.message = 'Hello from Hello World Component!';
        this.courses = [
            { title: 'CS5200', id: 123 },
            { title: 'CS5610', id: 234 },
            { title: 'CS3200', id: 345 },
            { title: 'CS4550', id: 456 }
        ];
    }
    HelloWorldComponent.prototype.ngOnInit = function () {
    };
    HelloWorldComponent.prototype.deleteCourse = function (courseId) {
        this.courses =
            this.courses
                .filter(function (course) {
                return course.id !== courseId;
            });
    };
    HelloWorldComponent.prototype.addCourse = function (title) {
        var largestId = Math.max.apply(Math, this.courses.map(function (course) {
            return course.id;
        }));
        this.courses.push({ title: title, id: largestId + 1 });
    };
    HelloWorldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hello-world',
            template: __webpack_require__(/*! ./hello-world.component.html */ "./src/app/hello-world/hello-world.component.html"),
            styles: [__webpack_require__(/*! ./hello-world.component.css */ "./src/app/hello-world/hello-world.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());



/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.html":
/*!********************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\" *ngIf=\"this.moduleId\">\n  <li *ngFor=\"let lesson of lessons\" class=\"nav-item\">\n    <a class=\"nav-link active\"\n       [ngClass]=\"{'active': lesson.id === lessonId}\"\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\">\n      {{lesson.title}}\n    </a>\n  </li>\n\n</ul>\n<div class=\"mt-2 mb-2\">\n  <button class=\"btn btn-info\" (click)=\"getQuizzesForLesson()\">View Quizzes for {{lessonId}}</button><br/>\n</div>\n<app-widget-list></app-widget-list>\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.ts ***!
  \******************************************************/
/*! exports provided: LessonTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponent", function() { return LessonTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonTabsComponent = /** @class */ (function () {
    function LessonTabsComponent(route, lessonService, router) {
        var _this = this;
        this.route = route;
        this.lessonService = lessonService;
        this.router = router;
        this.lessons = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    LessonTabsComponent.prototype.ngOnInit = function () {
    };
    LessonTabsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.loadLessons(this.moduleId);
    };
    LessonTabsComponent.prototype.loadLessons = function (moduleId) {
        var _this = this;
        this.moduleId = moduleId;
        if (this.moduleId) {
            this.lessonService.findLessonsForModule(moduleId)
                .then(function (lessons) { return _this.lessons = lessons; });
        }
    };
    LessonTabsComponent.prototype.getQuizzesForLesson = function () {
        this.router.navigate(['/quizzes', { lessonId: this.lessonId }]);
    };
    LessonTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson-tabs',
            template: __webpack_require__(/*! ./lesson-tabs.component.html */ "./src/app/lesson-tabs/lesson-tabs.component.html"),
            styles: [__webpack_require__(/*! ./lesson-tabs.component.css */ "./src/app/lesson-tabs/lesson-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__["LessonServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LessonTabsComponent);
    return LessonTabsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Login</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control mb-2 mt-4\"/>\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         type=\"password\"\n         class=\"form-control mb-2\"/>\n  <small id=\"loginError\" class=\"text-danger\" [hidden]=\"!this.loginError\">\n    Login was unsuccessful. Please try again.\n  </small>\n  <button (click)=\"login(username, password)\"\n          class=\"btn btn-primary btn-block\">\n    Login\n  </button>\n\n  <a routerLink=\"/register\">Register</a>\n  <a routerLink=\"/home\" class=\"ml-2\">Home</a>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
        this.loginError = false;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        console.log([username, password]);
        this.service
            .login(username, password)
            .then(function (response) {
            if (response && response.error) {
                _this.loginError = true;
            }
            else {
                _this.loginError = false;
                _this.router.navigate(['profile']);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/course.module.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/course.module.client.ts ***!
  \************************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/module-list/module-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/module-list/module-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\r\n  background-color: red;\r\n  border-color: red;\r\n}\r\n\r\n.active.wbdv a {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/module-list/module-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">Modules</li>\n      <li [ngClass]=\"{'active': module.id == moduleId}\" *ngFor=\"let module of modules\"\n          class=\"list-group-item wbdv\">\n        <a routerLink=\"/course/{{courseId}}/module/{{module.id}}\">\n          {{module.title}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-8\">\n    <app-lesson-tabs></app-lesson-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/module-list/module-list.component.ts ***!
  \******************************************************/
/*! exports provided: ModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function() { return ModuleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/module.service.client */ "./src/app/services/module.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleListComponent = /** @class */ (function () {
    function ModuleListComponent(route, moduleService) {
        var _this = this;
        this.route = route;
        this.moduleService = moduleService;
        this.modules = []; //type for assignment
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    ModuleListComponent.prototype.ngOnInit = function () {
    };
    ModuleListComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.loadModules(this.courseId);
    };
    ModuleListComponent.prototype.loadModules = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.moduleService.findModulesForCourse(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    ModuleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-list',
            template: __webpack_require__(/*! ./module-list.component.html */ "./src/app/module-list/module-list.component.html"),
            styles: [__webpack_require__(/*! ./module-list.component.css */ "./src/app/module-list/module-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_module_service_client__WEBPACK_IMPORTED_MODULE_2__["ModuleServiceClient"]])
    ], ModuleListComponent);
    return ModuleListComponent;
}());



/***/ }),

/***/ "./src/app/noSanitize.pipe.ts":
/*!************************************!*\
  !*** ./src/app/noSanitize.pipe.ts ***!
  \************************************/
/*! exports provided: NoSanitizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoSanitizePipe", function() { return NoSanitizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoSanitizePipe = /** @class */ (function () {
    function NoSanitizePipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    NoSanitizePipe.prototype.transform = function (html) {
        return this.domSanitizer.bypassSecurityTrustHtml(html);
    };
    NoSanitizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'noSanitize' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], NoSanitizePipe);
    return NoSanitizePipe;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Profile</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"firstName\"\n         placeholder=\"first name\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"lastName\"\n         placeholder=\"lastName\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"email\"\n         placeholder=\"email\"\n         class=\"form-control\"/>\n  <button (click)=\"update()\"\n          class=\"btn btn-primary btn-block\">\n    Update\n  </button>\n\n  <app-enroll-list></app-enroll-list>\n  <a (click)=\"logout()\">Logout</a>\n  <a routerLink=\"/home\" class=\"ml-2\">Home</a>\n  <a routerLink=\"/admin\" class=\"ml-2\" [hidden]=\"!this.isAdmin\">Admin</a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, sectionService, router) {
        this.service = service;
        this.sectionService = sectionService;
        this.router = router;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.sections = [];
        this.isAdmin = false;
    }
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.user.username = this.username;
        this.user.password = this.password;
        this.user.email = this.email;
        this.user.firstName = this.firstName;
        this.user.lastName = this.lastName;
        this.service.updateUser(this.user)
            .then(function (user) {
            _this.user = user;
            _this.router.navigateByUrl('/profile');
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            _this.username = user.username;
            _this.email = user.email;
            _this.firstName = user.firstName;
            _this.lastName = user.lastName;
            if (user.isAdmin)
                _this.isAdmin = user.isAdmin;
        });
        this.sectionService
            .findSectionsForStudent()
            .then(function (sections) {
            console.log(sections);
            _this.sections = sections;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/quiz-answers/quiz-answers.component.css":
/*!*********************************************************!*\
  !*** ./src/app/quiz-answers/quiz-answers.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-answers/quiz-answers.component.html":
/*!**********************************************************!*\
  !*** ./src/app/quiz-answers/quiz-answers.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>{{quiz.username}}'s Submission</h2>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let question of questions\" class=\"list-group-item mb-2\">\n      <h4>{{question.title}} - {{question.points}}</h4>\n      {{quiz.answers[question.id]}}\n    </li>\n  </ul>\n  <button class=\"btn btn-danger\" (click)=\"backToSubmissions()\">Go Back</button>\n</div>\n"

/***/ }),

/***/ "./src/app/quiz-answers/quiz-answers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/quiz-answers/quiz-answers.component.ts ***!
  \********************************************************/
/*! exports provided: QuizAnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizAnswersComponent", function() { return QuizAnswersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizAnswersComponent = /** @class */ (function () {
    function QuizAnswersComponent(service, activatedRoute, router) {
        var _this = this;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.quizId = '';
        this.submissionId = '';
        this.quiz = {};
        this.questions = [];
        this.activatedRoute
            .params
            .subscribe(function (params) { return _this.setParams(params); });
    }
    QuizAnswersComponent.prototype.ngOnInit = function () {
    };
    QuizAnswersComponent.prototype.setParams = function (params) {
        var _this = this;
        this.quizId = params['quizId'];
        this.submissionId = params['submissionId'];
        if (this.quizId && this.submissionId) {
            this.service.findQuizAnswers(this.quizId, this.submissionId)
                .then(function (quiz) {
                _this.quiz = quiz;
                console.log(_this.quiz);
            });
            this.service.findAllQuestionsForQuiz(this.quizId)
                .then(function (questions) { return _this.questions = questions; });
        }
    };
    QuizAnswersComponent.prototype.backToSubmissions = function () {
        this.router.navigateByUrl('/quiz/' + this.quizId + '/submissions');
    };
    QuizAnswersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-answers',
            template: __webpack_require__(/*! ./quiz-answers.component.html */ "./src/app/quiz-answers/quiz-answers.component.html"),
            styles: [__webpack_require__(/*! ./quiz-answers.component.css */ "./src/app/quiz-answers/quiz-answers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__["QuizServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuizAnswersComponent);
    return QuizAnswersComponent;
}());



/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Quizzes</h2>\n\n  <ul class=\"list-group\" *ngIf=\"quizzes.length > 0\">\n    <li *ngFor=\"let quiz of quizzes\" class=\"list-group-item\">\n      {{quiz.name}}\n\n      <a routerLink=\"/quiz/{{quiz.id}}/submissions\" class=\"btn btn-info float-right ml-2\">Submissions</a>\n      <a routerLink=\"/quiz/{{quiz.id}}\" class=\"btn btn-success float-right\">Take</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.ts ***!
  \**************************************************/
/*! exports provided: QuizListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizListComponent", function() { return QuizListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizListComponent = /** @class */ (function () {
    function QuizListComponent(service, route, router) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.quizzes = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    QuizListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllQuizzesForLesson(this.lessonId)
            .then(function (quizzes) { return _this.quizzes = quizzes; });
        this.router.navigateByUrl('/quizzes');
        console.log(this.quizzes);
    };
    QuizListComponent.prototype.setParams = function (params) {
        this.lessonId = params['lessonId'];
    };
    QuizListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-list',
            template: __webpack_require__(/*! ./quiz-list.component.html */ "./src/app/quiz-list/quiz-list.component.html"),
            styles: [__webpack_require__(/*! ./quiz-list.component.css */ "./src/app/quiz-list/quiz-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__["QuizServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuizListComponent);
    return QuizListComponent;
}());



/***/ }),

/***/ "./src/app/quiz-submissions/quiz-submissions.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/quiz-submissions/quiz-submissions.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-submissions/quiz-submissions.component.html":
/*!******************************************************************!*\
  !*** ./src/app/quiz-submissions/quiz-submissions.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Submissions</h2>\n\n  <label class=\"font-weight-bold mr-2 mb-4\">Search by username</label><input [(ngModel)]=\"searchText\" placeholder=\"enter username here\">\n\n  <table class=\"table table-bordered table-striped\"  *ngIf=\"submissions.length > 0; else noSubmissions\">\n    <tr>\n      <th scope=\"col\">Username</th>\n      <th scope=\"col\">Time Submitted</th>\n      <th scope=\"col\">View Submission</th>\n    </tr>\n    <tr *ngFor=\"let submission of submissions | filter : searchText\">\n      <td>\n        {{submission.username}}\n      </td>\n      <td>\n        {{submission.timeSubmitted | date:'medium'}}\n      </td>\n      <td>\n        <button (click)=\"viewQuizAnswers(submission._id)\" class=\"btn btn-info\">View</button>\n      </td>\n    </tr>\n  </table>\n  <a routerLink=\"/\">Home</a>\n  <ng-template #noSubmissions>\n    <div>\n      There have been no submissions for this quiz yet.\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/quiz-submissions/quiz-submissions.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/quiz-submissions/quiz-submissions.component.ts ***!
  \****************************************************************/
/*! exports provided: QuizSubmissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizSubmissionsComponent", function() { return QuizSubmissionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizSubmissionsComponent = /** @class */ (function () {
    function QuizSubmissionsComponent(service, aRoute, router) {
        var _this = this;
        this.service = service;
        this.aRoute = aRoute;
        this.router = router;
        this.quizId = '';
        this.submissions = [];
        this.aRoute.params.subscribe(function (params) {
            return _this.loadSubmissions(params['quizId']);
        });
    }
    QuizSubmissionsComponent.prototype.loadSubmissions = function (quizId) {
        var _this = this;
        this.quizId = quizId;
        this.service.loadSubmissions(this.quizId)
            .then(function (submissions) { return _this.submissions = submissions; });
    };
    QuizSubmissionsComponent.prototype.ngOnInit = function () {
    };
    QuizSubmissionsComponent.prototype.viewQuizAnswers = function (submissionId) {
        this.router.navigateByUrl('/quiz/' + this.quizId + '/submission/' + submissionId);
    };
    QuizSubmissionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-submissions',
            template: __webpack_require__(/*! ./quiz-submissions.component.html */ "./src/app/quiz-submissions/quiz-submissions.component.html"),
            styles: [__webpack_require__(/*! ./quiz-submissions.component.css */ "./src/app/quiz-submissions/quiz-submissions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service_client__WEBPACK_IMPORTED_MODULE_2__["QuizServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QuizSubmissionsComponent);
    return QuizSubmissionsComponent;
}());



/***/ }),

/***/ "./src/app/quiz-taker/quiz-taker.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quiz-taker/quiz-taker.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-taker/quiz-taker.component.html":
/*!******************************************************!*\
  !*** ./src/app/quiz-taker/quiz-taker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h2>{{quiz.name}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li *ngFor=\"let question of questions\" class=\"list-group-item mb-2\">\r\n      <div [ngSwitch]=\"determineQuestionType(question)\">\r\n        <div *ngSwitchCase=\"'essay'\">\r\n          <h3>{{question.title}}</h3>\r\n          <p>{{question.description}}</p>\r\n          <textarea [(ngModel)]='submission[question.id]' class=\"form-control\" rows=\"4\" cols=\"50\"></textarea>\r\n        </div>\r\n        <div *ngSwitchCase=\"'trueFalse'\">\r\n          <h3>{{question.title}}</h3>\r\n          <p>{{question.description}}</p>\r\n          <div class=\"form-group\">\r\n            <div class=\"radio\" *ngFor=\"let item of trueFalse\">\r\n              <label>\r\n                <input type=\"radio\" name=\"tfQuestion\" value=\"{{item}}\" [(ngModel)]='submission[question.id]'>\r\n                {{item}}\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngSwitchCase=\"'multipleChoice'\">\r\n          <h3>{{question.title}}</h3>\r\n          <p>{{question.description}}</p>\r\n          <div class=\"form-group\">\r\n            <div class=\"radio\" *ngFor=\"let item of question.options.split('\\n')\">\r\n              <label>\r\n                <input type=\"radio\" name=\"mcQuestion\" value=\"{{item}}\" [(ngModel)]='submission[question.id]'>\r\n                {{item}}\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngSwitchCase=\"'fillInBlanks'\">\r\n          <h3>{{question.title}}</h3>\r\n          <div [innerHtml]=\"determineBlanksQuestion(question) | noSanitize\"></div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n  <button class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\r\n  <button class=\"btn btn-success ml-2\" (click)=\"submit(submission)\">Submit</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/quiz-taker/quiz-taker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quiz-taker/quiz-taker.component.ts ***!
  \****************************************************/
/*! exports provided: QuizTakerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizTakerComponent", function() { return QuizTakerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizTakerComponent = /** @class */ (function () {
    function QuizTakerComponent(service, activatedRoute, router) {
        var _this = this;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.quizId = '';
        this.quiz = {};
        this.submission = {};
        this.questions = []; //TODO: make this attach to the quiz object by creating a model
        this.trueFalse = [
            "True",
            "False"
        ];
        this.activatedRoute
            .params
            .subscribe(function (params) { return _this.loadQuiz(params['quizId']); });
        if (this.quizId && this.quizId !== null) {
            this.service.findAllQuestionsForQuiz(this.quizId)
                .then(function (questions) { return _this.questions = questions; });
        }
    }
    QuizTakerComponent.prototype.loadQuiz = function (quizId) {
        var _this = this;
        this.quizId = quizId;
        this.service
            .findQuizById(quizId)
            .then(function (quiz) { return _this.quiz = quiz; });
    };
    QuizTakerComponent.prototype.submit = function (submission) {
        var _this = this;
        alert('Once submitted, your answers can not be changed. Are you sure you wish to submit?');
        this.service
            .submitQuiz(this.submission, this.quizId)
            .then(function (quiz) {
            if (quiz._id) {
                alert('Your quiz has been submitted');
                _this.router.navigateByUrl('/');
            }
            else {
                alert('There was an error submitting your quiz. Please try again');
            }
        });
    };
    QuizTakerComponent.prototype.cancel = function () {
        alert('Your answers will not be saved. Are you sure you wish to exit?');
        this.router.navigateByUrl('/');
    };
    QuizTakerComponent.prototype.ngOnInit = function () {
    };
    QuizTakerComponent.prototype.determineQuestionType = function (question) {
        if (question.options) {
            return 'multipleChoice';
        }
        else if (question.variables) {
            return 'fillInBlanks';
        }
        else if (question.isTrue) {
            return 'trueFalse';
        }
        else {
            return 'essay';
        }
    };
    QuizTakerComponent.prototype.determineBlanksQuestion = function (blanks) {
        if (blanks.description) {
            var variable = blanks.description.substring(blanks.description.indexOf('['), blanks.description.indexOf(']') + 1);
            var html = '<input type="text" [(ngModel)]="submission[blanks.id]"/>';
            var question = '<p>' + blanks.description.replace(variable, html) + '</p>';
            return question;
        }
        else {
            return '';
        }
    };
    QuizTakerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-taker',
            template: __webpack_require__(/*! ./quiz-taker.component.html */ "./src/app/quiz-taker/quiz-taker.component.html"),
            styles: [__webpack_require__(/*! ./quiz-taker.component.css */ "./src/app/quiz-taker/quiz-taker.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service_client__WEBPACK_IMPORTED_MODULE_2__["QuizServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QuizTakerComponent);
    return QuizTakerComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Register</h1>\n\n  <input [(ngModel)]=\"username\" required\n         placeholder=\"username\"\n         class=\"form-control mb-2 mt-4\"/>\n  <input [(ngModel)]=\"password\" required\n         type=\"password\"\n         placeholder=\"password\"\n         class=\"form-control mb-2\"/>\n  <input [(ngModel)]=\"password2\" required\n         type=\"password\"\n         placeholder=\"verify password\"\n         class=\"form-control mb-2\"/>\n  <small id=\"passwordsDoNotMatch\" class=\"text-danger\" [hidden]=\"!this.passwordMatchError\">\n    Passwords do not match. Please try again.\n  </small>\n  <small id=\"usernameTaken\" class=\"text-danger\" [hidden]=\"!this.usernameTakenError\">\n    Username has already been taken. Please try a new username.\n  </small>\n  <button (click)=\"register(username, password, password2)\"\n          class=\"btn btn-primary btn-block\">\n    Register\n  </button>\n\n  <a routerLink=\"/login\">Login</a>\n  <a routerLink=\"/home\" class=\"ml-2\">Home</a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
        this.passwordMatchError = false;
        this.usernameTakenError = false;
    }
    RegisterComponent.prototype.register = function (username, password, password2) {
        var _this = this;
        if (password !== password2) {
            this.passwordMatchError = true;
            return;
        }
        this.service
            .createUser(username, password)
            .then(function (response) {
            if (response && response.error) {
                _this.usernameTakenError = true;
            }
            else {
                _this.usernameTakenError = false;
                _this.router.navigate(['profile']);
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/section-list/section-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/section-list/section-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section-list/section-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/section-list/section-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Add section for course: {{courseId}}</h1>\n  <input [(ngModel)]=\"sectionName\"\n         placeholder=\"Section Name\"\n         class=\"form-control\">\n  <input [(ngModel)]=\"seats\"\n         placeholder=\"Seats available\"\n         class=\"form-control\">\n  <button (click)=\"createSection(sectionName, seats)\" class=\"btn btn-success btn-block\">\n    Add Section\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/section-list/section-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-list/section-list.component.ts ***!
  \********************************************************/
/*! exports provided: SectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionListComponent", function() { return SectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SectionListComponent = /** @class */ (function () {
    function SectionListComponent(service, route, router) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.sectionName = '';
        this.seats = '';
        this.courseId = '';
        this.route.params.subscribe(function (params) { return _this.setParams(params['courseId']); });
    }
    SectionListComponent.prototype.setParams = function (courseId) {
        this.courseId = courseId;
    };
    SectionListComponent.prototype.createSection = function (sectionName, seats) {
        var _this = this;
        this
            .service
            .createSection(this.courseId, sectionName, seats)
            .then(function (section) {
            _this.router.navigateByUrl('admin/course/' + _this.courseId + '/section/' + section._id);
        });
    };
    SectionListComponent.prototype.ngOnInit = function () {
    };
    SectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-list',
            template: __webpack_require__(/*! ./section-list.component.html */ "./src/app/section-list/section-list.component.html"),
            styles: [__webpack_require__(/*! ./section-list.component.css */ "./src/app/section-list/section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "./src/app/services/course-navigator.service.client.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/course-navigator.service.client.ts ***!
  \*************************************************************/
/*! exports provided: CourseNavigatorServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorServiceClient", function() { return CourseNavigatorServiceClient; });
var CourseNavigatorServiceClient = /** @class */ (function () {
    function CourseNavigatorServiceClient() {
    }
    CourseNavigatorServiceClient.prototype.findAllCourses = function () {
        return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/course')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllModulesForCourses = function (courseId) {
        return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/course/' + courseId + '/module')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllSectionsForCourse = function (courseId) {
        return fetch('https://node-lexikacoyannakis.herokuapp.com/api/course/' + courseId + '/section')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.removeSection = function (sectionId) {
        return fetch('https://node-lexikacoyannakis.herokuapp.com/api/section/' + sectionId, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    CourseNavigatorServiceClient.prototype.addSection = function (courseId, section) {
        return fetch('https://node-lexikacoyannakis.herokuapp.com/course/' + courseId + '/section', {
            body: JSON.stringify(section),
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return CourseNavigatorServiceClient;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        this.COURSE_URL = 'https://web2018-lexikacoyannakis.herokuapp.com/api/course';
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(this.COURSE_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findCourseById = function (courseId) {
        return fetch(this.COURSE_URL + '/' + courseId)
            .then(function (response) { return response.json(); });
    };
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/lesson.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/lesson.service.client.ts ***!
  \***************************************************/
/*! exports provided: LessonServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonServiceClient", function() { return LessonServiceClient; });
var LessonServiceClient = /** @class */ (function () {
    function LessonServiceClient() {
        this.LESSON_URL = 'https://web2018-lexikacoyannakis.herokuapp.com/api/module/';
    }
    LessonServiceClient.prototype.findLessonsForModule = function (moduleId) {
        return fetch(this.LESSON_URL + moduleId + '/lesson')
            .then(function (response) { return response.json(); });
    };
    return LessonServiceClient;
}());



/***/ }),

/***/ "./src/app/services/module.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/module.service.client.ts ***!
  \***************************************************/
/*! exports provided: ModuleServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleServiceClient", function() { return ModuleServiceClient; });
var ModuleServiceClient = /** @class */ (function () {
    function ModuleServiceClient() {
        this.MODULE_URL = 'https://web2018-lexikacoyannakis.herokuapp.com/api/course/COURSE_ID/module';
    }
    ModuleServiceClient.prototype.findModulesForCourse = function (courseId) {
        return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
            .then(function (response) { return response.json(); });
    };
    return ModuleServiceClient;
}());



/***/ }),

/***/ "./src/app/services/quiz.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/quiz.service.client.ts ***!
  \*************************************************/
/*! exports provided: QuizServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizServiceClient", function() { return QuizServiceClient; });
var QuizServiceClient = /** @class */ (function () {
    function QuizServiceClient() {
    }
    QuizServiceClient.prototype.loadSubmissions = function (quizId) {
        return fetch('https://node-lexikacoyannakis.herokuapp.com/api/quiz/' + quizId + '/submissions')
            .then(function (response) { return response.json(); });
    };
    QuizServiceClient.prototype.submitQuiz = function (quiz, quizId) {
        return fetch('https://node-lexikacoyannakis.herokuapp.com/api/quiz/' + quizId, {
            method: 'post',
            body: JSON.stringify(quiz),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) { return response.json(); });
    };
    QuizServiceClient.prototype.findQuizById = function (quizId) {
        return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/exam/' + quizId)
            .then(function (response) { return response.json(); });
    };
    QuizServiceClient.prototype.findAllQuizzesForLesson = function (lessonId) {
        return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/lesson/' + lessonId + '/exam')
            .then(function (response) { return response.json(); });
    };
    QuizServiceClient.prototype.findAllQuestionsForQuiz = function (quizId) {
        return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/exam/' + quizId + '/question')
            .then(function (response) { return response.json(); });
    };
    QuizServiceClient.prototype.findQuizAnswers = function (quizId, submissionId) {
        return fetch('https://node-lexikacoyannakis.herokuapp.com/api/quiz/' + quizId + '/submission/' + submissionId, {
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    return QuizServiceClient;
}());



/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        this.SECTION_URL = 'https://node-lexikacoyannakis.herokuapp.com/api/course/COURSEID/section';
        this.UPDATE_SECTION_URL = 'https://node-lexikacoyannakis.herokuapp.com/api/section/SECTIONID';
    }
    SectionServiceClient.prototype.findSectionsForStudent = function () {
        var url = 'https://node-lexikacoyannakis.herokuapp.com/api/student/section';
        return fetch(url, {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.enrollStudentInSection = function (sectionId) {
        var url = 'https://node-lexikacoyannakis.herokuapp.com/api/section/' + sectionId + '/enrollment';
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.findSectionsForCourse = function (courseId) {
        return fetch(this.SECTION_URL.replace('COURSEID', courseId))
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.createSection = function (courseId, name, seats) {
        var section = { courseId: courseId, name: name, seats: seats };
        return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.updateSection = function (sectionId, courseId, name, seats) {
        var section = { sectionId: sectionId, courseId: courseId, name: name, seats: seats };
        return fetch(this.UPDATE_SECTION_URL.replace('SECTIONID', sectionId), {
            method: 'put',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.findSectionInfo = function (sectionId) {
        return fetch('https://node-lexikacoyannakis.herokuapp.com/api/section/' + sectionId)
            .then(function (response) { return response.json(); });
    };
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch('https://node-lexikacoyannakis.herokuapp.com/api/user/' + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch('https://node-lexikacoyannakis.herokuapp.com/api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response != null) {
                return response.json();
            }
            else {
                return;
            }
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch('https://node-lexikacoyannakis.herokuapp.com/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch('https://node-lexikacoyannakis.herokuapp.com/api/profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.createUser = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return fetch('https://node-lexikacoyannakis.herokuapp.com/api/register', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response != null) {
                return response.json();
            }
            else {
                return;
            }
        });
    };
    UserServiceClient.prototype.updateUser = function (user) {
        return fetch('https://node-lexikacoyannakis.herokuapp.com/api/profile', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
    }
    WidgetServiceClient.prototype.findWidgetsForLesson = function (lessonId) {
        return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/lesson/' + lessonId + '/widget')
            .then(function (response) { return response.json(); });
    };
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/update-section-list/update-section-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/update-section-list/update-section-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/update-section-list/update-section-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/update-section-list/update-section-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Sections for course: {{courseId}}</h1>\n  <input [(ngModel)]=\"sectionName\"\n         placeholder=\"Section Name\"\n         class=\"form-control\">\n  <input [(ngModel)]=\"seats\"\n         placeholder=\"Seats available\"\n         class=\"form-control\">\n  <button (click)=\"updateSection(sectionName, seats)\" class=\"btn btn-success btn-block\">\n    Update Section\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/update-section-list/update-section-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/update-section-list/update-section-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: UpdateSectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSectionListComponent", function() { return UpdateSectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateSectionListComponent = /** @class */ (function () {
    function UpdateSectionListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.sectionName = '';
        this.seats = '';
        this.courseId = '';
        this.sectionId = '';
        this.route.params.subscribe(function (params) { return _this.loadSectionInfo(params['courseId'], params['sectionId']); });
    }
    UpdateSectionListComponent.prototype.ngOnInit = function () {
    };
    UpdateSectionListComponent.prototype.loadSectionInfo = function (courseId, sectionId) {
        var _this = this;
        this.courseId = courseId;
        this.sectionId = sectionId;
        this
            .service
            .findSectionInfo(sectionId)
            .then(function (section) {
            _this.sectionName = section.name;
            _this.seats = section.seats;
        });
    };
    UpdateSectionListComponent.prototype.updateSection = function (sectionName, seats) {
        var _this = this;
        this.service.updateSection(this.sectionId, this.courseId, sectionName, seats)
            .then(function () { return _this.loadSectionInfo(_this.courseId, _this.sectionId); });
    };
    UpdateSectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-section-list',
            template: __webpack_require__(/*! ./update-section-list.component.html */ "./src/app/update-section-list/update-section-list.component.html"),
            styles: [__webpack_require__(/*! ./update-section-list.component.css */ "./src/app/update-section-list/update-section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UpdateSectionListComponent);
    return UpdateSectionListComponent;
}());



/***/ }),

/***/ "./src/app/white-board/white-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/white-board/white-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/white-board/white-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/white-board/white-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h1>\r\n    White Board\r\n  </h1>\r\n\r\n  <a routerLink=\"/login\">Login</a>\r\n  <a routerLink=\"/register\" class=\"ml-2\">Register</a>\r\n  <app-enroll-list></app-enroll-list>\r\n  <app-course-grid></app-course-grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/white-board/white-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/white-board/white-board.component.ts ***!
  \******************************************************/
/*! exports provided: WhiteBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardComponent", function() { return WhiteBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhiteBoardComponent = /** @class */ (function () {
    function WhiteBoardComponent() {
    }
    WhiteBoardComponent.prototype.ngOnInit = function () {
    };
    WhiteBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-white-board',
            template: __webpack_require__(/*! ./white-board.component.html */ "./src/app/white-board/white-board.component.html"),
            styles: [__webpack_require__(/*! ./white-board.component.css */ "./src/app/white-board/white-board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhiteBoardComponent);
    return WhiteBoardComponent;
}());



/***/ }),

/***/ "./src/app/widget-list/widget-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgets && widgets.length > 0; else noWidgets\">\n  <div *ngFor=\"let widget of widgets\" class=\"m-4\">\n    <div [ngSwitch]=\"widget.widgetType\">\n      <div *ngSwitchCase=\"'Heading'\">\n        <div [ngSwitch]=\"widget.size\">\n          <h1 *ngSwitchCase=\"'1'\">{{widget.text}}</h1>\n          <h2 *ngSwitchCase=\"'2'\">{{widget.text}}</h2>\n          <h3 *ngSwitchCase=\"'3'\">{{widget.text}}</h3>\n          <h4 *ngSwitchCase=\"'4'\">{{widget.text}}</h4>\n          <h5 *ngSwitchCase=\"'5'\">{{widget.text}}</h5>\n          <h6 *ngSwitchCase=\"'6'\">{{widget.text}}</h6>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'Link'\">\n        <a href=\"{{widget.href}}\">{{widget.text}}</a>\n      </div>\n      <div *ngSwitchCase=\"'Image'\">\n        <img src=\"{{widget.src}}\" >\n      </div>\n      <div *ngSwitchCase=\"'Paragraph'\">\n        <p>{{widget.text}}</p>\n      </div>\n      <div *ngSwitchCase=\"'List'\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\"\n              *ngFor=\"let item of widget.listItems.split('\\n')\">\n            {{item}}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #noWidgets>\n  No widgets are available for this lesson.\n</ng-template>\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.ts ***!
  \******************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.widgets = [];
        this.route.params.subscribe(function (params) { return _this.setContext(params); });
    }
    WidgetListComponent.prototype.setContext = function (params) {
        this.context = params;
        if (params.lessonId) {
            this.loadWidgets(params.lessonId);
        }
    };
    WidgetListComponent.prototype.loadWidgets = function (lessonId) {
        var _this = this;
        this.service.findWidgetsForLesson(lessonId)
            .then(function (widgets) { return _this.widgets = widgets; });
        console.log(this.widgets);
    };
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lkaco\Documents\Web_Dev\webdev-summer2018-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map