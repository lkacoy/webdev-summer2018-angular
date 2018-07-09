export class LessonServiceClient {
  LESSON_URL = 'https://web2018-lexikacoyannakis.herokuapp.com/api/module/';

  findLessonsForModule(moduleId) {
    return fetch(this.LESSON_URL+ moduleId + '/lesson')
      .then(response => response.json());
  }
}
