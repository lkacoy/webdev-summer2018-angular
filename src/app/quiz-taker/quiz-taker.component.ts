import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {QuizServiceClient} from "../services/quiz.service.client";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

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
  trueFalse = [
    "True",
    "False"
  ]

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
    alert('Once submitted, your answers can not be changed. Are you sure you wish to submit?');
    this.service
      .submitQuiz(this.submission, this.quizId)
      .then(quiz => {
        if (quiz._id) {
          alert('Your quiz has been submitted');
          this.router.navigateByUrl('/');
        } else {
          alert('There was an error submitting your quiz. Please try again');
        }
      });
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

  determineBlanksQuestion(blanks) {
    if (blanks.description) {
      var variable = blanks.description.substring(blanks.description.indexOf('['), blanks.description.indexOf(']') + 1);
      var html = '<input type="text" [(ngModel)]="submission[blanks.id]"/>';
      var question = '<p>' + blanks.description.replace(variable, html) + '</p>';
      return question;
    }
    else {
      return '';
    }
  }

}
