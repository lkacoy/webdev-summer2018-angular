import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from "../services/section.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  courseId;
  sections = [];

  constructor(private service: SectionServiceClient,
              private route:ActivatedRoute,
              private router:Router) {

    this.route.params.subscribe(params => this.setParams(params));
  }

  ngOnInit() {
  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.loadSections(this.courseId);
  }

  enroll(section) {
    if (section.seats == 0) {
      alert('You can not enroll because the section is at full capacity.');
    }
    this.service
      .enrollStudentInSection(section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  }

  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

}
