import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseshomeComponent } from './courseshome/courseshome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoursechartComponent } from './coursechart/coursechart.component';
import { NativeCourseComponent } from './native-course/native-course.component';

const routes: Routes = [
  {path: '', component: CourseshomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'chart/:id', component: CoursechartComponent},
  {path: 'native', component: NativeCourseComponent},

  //Cualquier cosa

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
