import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {
    path: 'Teacher',
    component: TeacherComponent
  }, {
    path: 'Student',
    component: StudentComponent
  }, {
    path: 'SignUp',
    component: SignUpComponent
  }, {
    path: 'SignIn',
    component: SignInComponent
  }, {
  	path: '',
  	component: AppComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }