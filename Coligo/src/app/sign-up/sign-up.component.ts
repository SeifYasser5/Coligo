import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private AppService: AppService) { 
  }

  user: User;
  username: string;
  password1: string;
  password2: string;
  type: string;

  ngOnInit() {
  }

  Register() {
  	if (this.password1==this.password2){
  		this.user = {username: this.username, password: this.password1};
  		if (this.type=="teacher"){
  			this.AppService.CreateTeacher(this.user).subscribe((res)=>console.log(res));
  		} 
  		if (this.type=="student"){
  			this.AppService.CreateStudent(this.user).subscribe((res)=>console.log(res)); 
  		}
  	}
  }
}
