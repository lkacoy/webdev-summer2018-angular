export class WidgetServiceClient {
  findWidgetsForLesson(lessonId) {
    return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
