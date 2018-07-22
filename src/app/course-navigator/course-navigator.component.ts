import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from "../services/course-navigator.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service:CourseNavigatorServiceClient,
              private route:ActivatedRoute,
              private router:Router) {
    this.route.params.subscribe( params => this.setParams(params));
  }
  courses = [];
  modules = [];
  sections = [];
  courseId;
  sectionId;


  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.sectionId = params['sectionId'];

    if (this.courseId) {
      this.findSectionsForCourse(this.courseId);
    }

    if (this.sectionId) {
      console.log(this.sectionId);
    }

  }

  selectCourse(courseId) {
    this.courseId = courseId;
    this.service.findAllModulesForCourses(courseId)
      .then(modules =>this.modules = modules);
  }

  findSectionsForCourse(courseId) {
    this.service.findAllSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
    if (this.router.url === '/admin') {
      this.router.navigateByUrl('/admin/course/' + courseId);
    }
  }

  removeSection(sectionId) {
    this.service.removeSection(sectionId)
      .then(() => {
        this.findSectionsForCourse(this.courseId);
      })
  }

  addSection(courseId) {
    var section = {name: courseId, courseId: courseId};
    this.service.addSection(courseId, section)
      .then(() => this.findSectionsForCourse(courseId));
  }

}
