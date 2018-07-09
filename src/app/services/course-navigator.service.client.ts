export class CourseNavigatorServiceClient {

  findAllCourses() {
    return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/course')
      .then(response => response.json());

  }

  findAllModulesForCourses(courseId) {
    return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
