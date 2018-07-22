import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from "../services/course-navigator.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service:CourseNavigatorServiceClient,
              private route:ActivatedRoute) {
    this.route.params.subscribe( params => this.setParams(params));
  }
  courses = [];
  modules = [];
  sections = [];
  courseId;


  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

  setParams(params) {
    this.courseId = params['courseId'];
  }

  selectCourse(courseId) {
    this.courseId = courseId;
    this.service.findAllModulesForCourses(courseId)
      .then(modules =>this.modules = modules);
  }

  findSectionsForCourse(courseId) {
    this.service.findAllSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  removeSection(sectionId) {
    console.log(sectionId);
    this.service.removeSection(sectionId)
      .then(() => {
        this.findSectionsForCourse(this.courseId);
      })
  }

}
