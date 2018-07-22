import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {User} from "../models/user.model.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user:User = new User();
  username;
  password;
  email;
  firstName;
  lastName;
  sections = [];
  isAdmin:boolean = false;

  update() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.email = this.email;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.service.updateUser(this.user)
      .then(user => this.user = user);
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
          this.username = user.username;
          console.log(user);
          if (user.isAdmin) this.isAdmin = user.isAdmin;
      });

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );
  }

}
