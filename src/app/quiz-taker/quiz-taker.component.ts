import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {QuizServiceClient} from "../services/quiz.service.client";

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  quizId = '';
  quiz = {};
  submission = {};
  questions = []; //TODO: make this attach to the quiz object by creating a model

  constructor(private service: QuizServiceClient,
              private activatedRoute: ActivatedRoute,
              private router:Router) {
    this.activatedRoute
      .params
      .subscribe(params => this.loadQuiz(params['quizId']));

    if (this.quizId && this.quizId !== null) {
      this.service.findAllQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    }
  }


  loadQuiz(quizId) {
    this.quizId = quizId;
    this.service
      .findQuizById(quizId)
      .then(quiz => this.quiz = quiz);
  }
  submit(submission) {
    console.log(this.submission);
    this.service
      .submitQuiz(this.submission, this.quizId);
  }

  cancel() {
    alert('Your answers will not be saved. Are you sure you wish to exit?');
    this.router.navigateByUrl('/');
  }


  ngOnInit() {
  }


  determineQuestionType(question) {
    if (question.options) {
      return 'multipleChoice';
    } else if (question.variables) {
      return 'fillInBlanks';
    } else if (question.isTrue) {
      return 'trueFalse';
    } else {
      return 'essay';
    }
  }


}
