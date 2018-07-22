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
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSectionInfo(params['courseId'], params['sectionId']))
  }

  sectionName = '';
  seats = '';
  courseId = '';

  loadSectionInfo(courseId, sectionId) {
    this
      .service
      .findSectionInfo(sectionId)
      .then(section => {
        this.sectionName = section.name;
        this.seats = section.seats;
      });
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSectionInfo(this.courseId, this.route.params['sectionId']);
      });
  }

  ngOnInit() {
  }

}
