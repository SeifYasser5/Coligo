import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
//import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { Quiz } from './quiz';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class AppService {

	url = 'http://localhost:3000/api';

	httpOption = {headers: new HttpHeaders().set("Content-Type", "application/json")};

	constructor(private http: HttpClient) {
	}

	CreateTeacher(user: User) {
		return this.http.post(this.url+"/createTeacher", JSON.stringify(user), this.httpOption);
	}

	CreateStudent(user: User) {
		return this.http.post(this.url+"/createStudent", JSON.stringify(user), this.httpOption); 
	}
	LogTeacher(user: User) {
		const params = new HttpParams().set('username', user.username).set('password', user.password);
		return this.http.get(this.url+"/getOneTeacher", {params});
	}
	LogStudent(user: User) {
		const params = new HttpParams().set('username', user.username).set('password', user.password);
		return this.http.get(this.url+"/getOneStudent", {params});
	}
	CreateQuiz(quiz: Quiz) {
		return this.http.post(this.url+"/createQuiz", JSON.stringify(quiz), this.httpOption);
	}
	GetQuizzes(): Quiz{
		return this.http.get(this.url+"/getAllQuiz");
	}
}