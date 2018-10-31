import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

constructor(private AppService: AppService, private router: Router) { 
  }

  user: User;
  usernamey: string;
  passwordy: string;
  typey: string;

  ngOnInit() {
  }

  Log() {
    this.user = {username: this.usernamey, password: this.passwordy};
    if (this.typey=="teacher"){
      this.AppService.LogTeacher(this.user)
      .subscribe(res => this.router.navigate(['Teacher']));     
    } 
    if (this.typey=="student"){
      this.AppService.LogStudent(this.user)
      .subscribe(res => this.router.navigate(['Student']));
    }
  }
}