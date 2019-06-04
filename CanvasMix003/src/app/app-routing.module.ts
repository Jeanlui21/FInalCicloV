import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCanvasComponent } from './login-canvas/login-canvas.component';
import { RegisterCanvasComponent } from './register-canvas/register-canvas.component';
import { DashCanvasComponent } from './dash-canvas/dash-canvas.component';
import { ChartCanvasComponent } from './chart-canvas/chart-canvas.component';
import { ErrorCanvasComponent } from './error-canvas/error-canvas.component';
import { CanvasTeachersComponent } from './canvas-teachers/canvas-teachers.component';


const routes: Routes = [
  { path: 'login', component: LoginCanvasComponent},
  { path: 'register', component: RegisterCanvasComponent},
  { path: 'dashboard', component: DashCanvasComponent},
  { path: 'teachers', component: CanvasTeachersComponent},
  { path: 'charts/:id', component: ChartCanvasComponent},
  { path: 'error', component: ErrorCanvasComponent},

  // Default
  { path: '**', redirectTo: 'error'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
