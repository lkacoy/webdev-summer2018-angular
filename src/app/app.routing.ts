import {Routes, RouterModule} from "@angular/router";
import {WhiteBoardComponent} from "./white-board/white-board.component";
import {CourseViewerComponent} from "./course-viewer/course-viewer.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {EnrollComponent} from "./enroll/enroll.component";
import {CourseNavigatorComponent} from "./course-navigator/course-navigator.component";
import {QuizListComponent} from "./quiz-list/quiz-list.component";
import {QuizSubmissionsComponent} from "./quiz-submissions/quiz-submissions.component";
import {QuizTakerComponent} from "./quiz-taker/quiz-taker.component";
import {QuizAnswersComponent} from "./quiz-answers/quiz-answers.component";

const appRoutes:Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'quizzes', component: QuizListComponent},
  { path: 'quiz/:quizId', component: QuizTakerComponent},
  { path: 'quiz/:quizId/submissions', component: QuizSubmissionsComponent},
  { path: 'quiz/:quizId/submission/:submissionId', component: QuizAnswersComponent},
  { path: 'admin', component: CourseNavigatorComponent},
  { path: 'admin/course/:courseId', component: CourseNavigatorComponent},
  { path: 'admin/course/:courseId/add', component: CourseNavigatorComponent},
  { path: 'admin/course/:courseId/section/:sectionId', component: CourseNavigatorComponent },
  { path: 'course/:courseId/enroll', component: EnrollComponent},
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent },
  { path: '**', component: WhiteBoardComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
