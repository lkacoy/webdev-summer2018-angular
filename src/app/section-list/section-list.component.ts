import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private route: ActivatedRoute,
              private router:Router) {
    this.route.params.subscribe(params => this.setParams(params['courseId']))
  }

  sectionName = '';
  seats = '';
  courseId = '';

  setParams(courseId) {
    this.courseId = courseId;
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then((section) => {
        this.router.navigateByUrl('admin/course/'+this.courseId+'/section/'+section._id);
      });
  }

  ngOnInit() {
  }

}
