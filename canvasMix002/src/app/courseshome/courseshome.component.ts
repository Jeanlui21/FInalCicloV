import { Component, OnInit } from '@angular/core';
import { CanvascoursesService } from '../canvascourses.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courseshome',
  templateUrl: './courseshome.component.html',
  styleUrls: ['./courseshome.component.css']
})
export class CourseshomeComponent implements OnInit {
  private lista = null;
  constructor(private canvascoursesService: CanvascoursesService, private router: Router ) {}

  goGoto(id){
    this.router.navigate(['chart',id]);
  }

  ngOnInit() {
    this.canvascoursesService.retornar().subscribe(result => this.lista = result);
  }

}
