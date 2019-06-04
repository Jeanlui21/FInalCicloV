import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// Bootstrap md
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Servico
import { CanvasInfoService } from './canvas-info.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginCanvasComponent } from './login-canvas/login-canvas.component';
import { RegisterCanvasComponent } from './register-canvas/register-canvas.component';
import { ChartCanvasComponent } from './chart-canvas/chart-canvas.component';
import { DashCanvasComponent } from './dash-canvas/dash-canvas.component';
import { ErrorCanvasComponent } from './error-canvas/error-canvas.component';
import { CanvasTeachersComponent } from './canvas-teachers/canvas-teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCanvasComponent,
    RegisterCanvasComponent,
    ChartCanvasComponent,
    DashCanvasComponent,
    ErrorCanvasComponent,
    CanvasTeachersComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CanvasInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
