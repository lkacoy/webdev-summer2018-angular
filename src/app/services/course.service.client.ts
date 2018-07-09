export class CourseServiceClient {
  COURSE_URL = 'https://web2018-lexikacoyannakis.herokuapp.com/api/course';

  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
}
