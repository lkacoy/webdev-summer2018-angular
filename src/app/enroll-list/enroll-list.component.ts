import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-enroll-list',
  templateUrl: './enroll-list.component.html',
  styleUrls: ['./enroll-list.component.css']
})
export class EnrollListComponent implements OnInit {

  sections = [];

  constructor(private sectionService: SectionServiceClient,) { }

  ngOnInit() {
    this.sectionService
      .findSectionsForStudent()
      .then(sections => {
        console.log(sections);
        this.sections = sections
      } );
  }

}
