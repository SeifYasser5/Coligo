import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Questions } from '../questions';
import { Answers } '../answers';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  title: string;
  typeq: string;
  v1: boolean = false;
  v2: boolean = false;
  question: string;
  answer: string;
  choice: string;
  choices = new Array();
  c = 0;
  Cchoices = new Array();
  cc = 0;
  answerss: string;
  q: Questions = new Questions();
  a: Answers = new Answers();
  questions: Questions[] = new Array();
  answers: Answers[] = new Array();
  quiz: Quiz;
  idd = 0;
  quizzes: Quiz[];
  v3: boolean = false;
  editedQuiz: Quiz = new Quiz();

  constructor(private AppService: AppService) { 
  }

  ngOnInit() {
  }

  number() {
    if(this.typeq=="0" || this.typeq=="1"){
      this.v1 = true;
      this.v2 = false;
    } else {
      this.v1 = false;
      this.v2 = true;
    }
  }
  
  addChoice() {
    this.choices[this.c]=this.choice;
    this.choice = "";
    this.c ++;
  }

  addCChoice() {
    this.Cchoices[this.cc]=this.answerss;
    this.cc ++;
  }

  addQuestion(){
    this.q.body = this.question;
    this.a.body = this.answer;
    this.q.choices = this.choices;
    this.a.choices = this.Cchoices;
    this.questions[this.idd] = this.q;
    this.answers[this.idd] = this.a;
    this.question = "";
    this.answer = "";
    this.choices = new Array(0);
    this.Cchoices = new Array(0);
    this.idd ++;
    console.log(this.idd);
  }

  Create(){
    this.quiz = {title: this.title, questions: this.questions, answers: this.answers};
    this.AppService.CreateQuiz(this.quiz).subscribe((res)=>console.log(res));
  }

  getQuizzes(){
    this.AppService.GetQuizzes().subscribe((res)=>this.quizzes=res);
    console.log(this.quizzes);
  }

  EditQuiz(quiz){
    this.v3 = true;
    this.editedQuiz = quiz;
  }

  delete(question){

  }

  add(){
    
  }
}