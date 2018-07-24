import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-update-section-list',
  templateUrl: './update-section-list.component.html',
  styleUrls: ['./update-section-list.component.css']
})
export class UpdateSectionListComponent implements OnInit {


  sectionName = '';
  seats = '';
  courseId = '';

  constructor(private service: SectionServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSectionInfo(params['courseId'], params['sectionId']))
  }


  ngOnInit() {
  }


  loadSectionInfo(courseId, sectionId) {
    this
      .service
      .findSectionInfo(sectionId)
      .then(section => {
        this.sectionName = section.name;
        this.seats = section.seats;
      });
  }

  updateSection(sectionName, seats) {

  }

}
