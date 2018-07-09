import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ModuleServiceClient} from "../services/module.service.client";

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private moduleService:ModuleServiceClient) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  courseId;
  moduleId;
  modules = []; //type for assignment
  ngOnInit() {
  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.loadModules(this.courseId);
  }

  loadModules(courseId) {
    this.courseId = courseId;
    this.moduleService.findModulesForCourse(courseId)
      .then(modules => this.modules = modules);
  }

}
