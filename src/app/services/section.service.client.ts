export class SectionServiceClient {

  SECTION_URL = 'https://node-lexikacoyannakis.herokuapp.com/api/course/COURSEID/section';
  UPDATE_SECTION_URL = 'https://node-lexikacoyannakis.herokuapp.com/api/section/SECTIONID';

  findSectionsForStudent() {
    const url = 'https://node-lexikacoyannakis.herokuapp.com/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'https://node-lexikacoyannakis.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  updateSection(sectionId, courseId, name, seats) {
    const section = {sectionId, courseId, name, seats};
    return fetch(this.UPDATE_SECTION_URL.replace('SECTIONID', sectionId), {
      method: 'put',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findSectionInfo(sectionId) {
    return fetch('https://node-lexikacoyannakis.herokuapp.com/api/section/' + sectionId)
      .then(response => response.json());
  }
}
