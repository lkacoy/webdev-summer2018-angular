import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from "../services/quiz.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  quizId = '';
  submissionId = '';

  constructor(private service: QuizServiceClient,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    this.activatedRoute
      .params
      .subscribe(params => this.setParams(params));
  }

  ngOnInit() {
  }

  setParams(params) {
    this.quizId = params['quizId'];
    this.submissionId = params['submissionId'];
    console.log(this.quizId);
    console.log(this.submissionId);
  }

  backToSubmissions() {
      this.router.navigateByUrl('/quiz/' + this.quizId + '/submissions');
  }

}
