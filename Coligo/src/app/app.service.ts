import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

export class Quiz {
	title: String;
	author: String;
	questions: [String];
	answers: [String];
}

@Injectable({
  providedIn: 'root'
})

export class AppService {

	private url = 'localhost:3000/api';

  constructor(private http: HttpClient) {
  }
}
