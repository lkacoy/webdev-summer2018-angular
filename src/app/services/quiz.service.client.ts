export class QuizServiceClient {

  loadSubmissions(quizId) {
    return fetch('http://localhost:4000/api/quiz/' + quizId + '/submissions')
      .then(response => response.json());
  }

  submitQuiz(quiz, quizId) {
    return fetch('http://localhost:4000/api/quiz/' + quizId,{
      method: 'post',
      body: JSON.stringify(quiz),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }
  findQuizById(quizId) {
    return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/exam/' + quizId)
      .then(response => response.json());
  }
  findAllQuizzesForLesson(lessonId) {
    return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/lesson/' + lessonId + '/exam')
      .then(response => response.json());
  }

  findAllQuestionsForQuiz(quizId) {
    return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/exam/' + quizId + '/question')
      .then(response => response.json());
  }
}
