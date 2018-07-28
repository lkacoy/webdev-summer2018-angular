import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from "@angular/forms";
import {CourseNavigatorServiceClient} from "./services/course-navigator.service.client";
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseServiceClient} from "./services/course.service.client";
import {routing} from "./app.routing";
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from "./services/module.service.client";
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from "./services/lesson.service.client";
import { WidgetListComponent } from './widget-list/widget-list.component';
import {WidgetServiceClient} from "./services/widget.service.client";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {UserServiceClient} from "./services/user.service.client";
import { SectionListComponent } from './section-list/section-list.component';
import {SectionServiceClient} from "./services/section.service.client";
import { EnrollComponent } from './enroll/enroll.component';
import { UpdateSectionListComponent } from './update-section-list/update-section-list.component';
import { EnrollListComponent } from './enroll-list/enroll-list.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { EssayQuestionComponent } from './essay-question/essay-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { FillInBlankQuestionComponent } from './fill-in-blank-question/fill-in-blank-question.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizSubmissionsComponent } from './quiz-submissions/quiz-submissions.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';
import {QuizServiceClient} from "./services/quiz.service.client";
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import {FilterPipe} from "./filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseNavigatorComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    WidgetListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionListComponent,
    EnrollComponent,
    UpdateSectionListComponent,
    EnrollListComponent,
    TrueFalseQuestionComponent,
    EssayQuestionComponent,
    MultipleChoiceQuestionComponent,
    FillInBlankQuestionComponent,
    QuizListComponent,
    QuizSubmissionsComponent,
    QuizAnswersComponent,
    QuizTakerComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
