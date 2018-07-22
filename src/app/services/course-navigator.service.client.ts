export class CourseNavigatorServiceClient {

  findAllCourses() {
    return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/course')
      .then(response => response.json());

  }

  findAllModulesForCourses(courseId) {
    return fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }

  findAllSectionsForCourse(courseId) {
    return fetch('http://localhost:4000/api/course/' + courseId+ '/section')
      .then(response => response.json());
  }

  removeSection(sectionId) {
    return fetch('http://localhost:4000/api/section/' + sectionId, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
