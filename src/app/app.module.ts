import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {CourseNavigatorServiceClient} from "./services/course-navigator.service.client";
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from "./services/course.service.client";
import { CourseGridComponent } from './course-grid/course-grid.component';
import {routing} from "./app.routing";
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from "./services/module.service.client";
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from "./services/lesson.service.client";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SectionListComponent } from './section-list/section-list.component';

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
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    SectionListComponent

  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [CourseNavigatorServiceClient,
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
