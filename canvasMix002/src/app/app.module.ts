import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CanvascoursesService } from './canvascourses.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseshomeComponent } from './courseshome/courseshome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoursechartComponent } from './coursechart/coursechart.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseshomeComponent,
    LoginComponent,
    RegisterComponent,
    CoursechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CanvascoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
