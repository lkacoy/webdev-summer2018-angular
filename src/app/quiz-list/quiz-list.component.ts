import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from "../services/quiz.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private route:ActivatedRoute,
              private router:Router) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  quizzes = [];
  lessonId;
  ngOnInit() {

    this.service.findAllQuizzesForLesson(this.lessonId)
      .then(quizzes => this.quizzes = quizzes);
    this.router.navigateByUrl('/quizzes');
    console.log(this.quizzes);
  }

  setParams(params) {
    this.lessonId = params['lessonId'];
  }



}
