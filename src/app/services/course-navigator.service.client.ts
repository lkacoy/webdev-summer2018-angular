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
    return fetch('https://node-lexikacoyannakis.herokuapp.com/api/course/' + courseId+ '/section')
      .then(response => response.json());
  }

  removeSection(sectionId) {
    return fetch('https://node-lexikacoyannakis.herokuapp.com/api/section/' + sectionId, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  addSection(courseId, section) {
    return fetch('https://node-lexikacoyannakis.herokuapp.com/course/'+ courseId + '/section', {
      body: JSON.stringify(section),
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    })
  }
}
