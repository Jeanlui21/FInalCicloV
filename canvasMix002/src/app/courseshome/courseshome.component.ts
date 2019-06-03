import { Component, OnInit, Injectable } from '@angular/core';
import { CoursesValuesService } from '../courses-values.service';
import { CanvascoursesService } from '../canvascourses.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-courseshome',
  templateUrl: './courseshome.component.html',
  styleUrls: ['./courseshome.component.css']
})
export class CourseshomeComponent implements OnInit {
  private lista = null;
  ide: string;
// tslint:disable-next-line: max-line-length
  constructor(private canvascoursesService: CanvascoursesService,private coursesValuesService: CoursesValuesService , private router: Router ) {}

  goGoto(id,coursename){
    let url = 'https://canvas-api-wquesada.c9users.io/api/courses/'+id+'/enrollments';
    this.coursesValuesService.setExtras(url);
    this.coursesValuesService.setName(coursename);
    this.router.navigate(['chart',id]);
    this.ide = id;
  }

  ngOnInit() {
    this.canvascoursesService.retornar().subscribe(result => this.lista = result);
  }

}
