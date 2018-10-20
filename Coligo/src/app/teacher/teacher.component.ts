import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

	v1 = 'true';
  v2 = 'hidden';
	
  constructor() { 
  	
  }
  ngOnInit() {
  }

  number(event: any): void {
    if(event.target.value=="0" || event.target.value=="0"){
      this.v1 = 'false';
      this.v2 = 'number';
    }
  }

  getNumber(num: number): Array<String> {
  	return new Array(num-1);
  }

}
