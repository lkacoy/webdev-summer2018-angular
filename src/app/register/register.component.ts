import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  passwordMatchError:boolean = false;
  usernameTakenError:boolean = false;

  register(username, password, password2) {
    if (password !== password2) {
      this.passwordMatchError = true;
      return;
    }
    this.service
      .createUser(username, password)
      .then((response) => {
        if (response && response.error) {
          this.usernameTakenError = true;
        } else {
          this.usernameTakenError = false;
          this.router.navigate(['profile']);
        }
      });

  }

  ngOnInit() {
  }

}
