import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CoursesValuesService } from '../courses-values.service';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Enrollments } from './resources/Enrollments';


@Component({
  selector: 'app-coursechart',
  templateUrl: './coursechart.component.html',
  styleUrls: ['./coursechart.component.css']
})
export class CoursechartComponent implements OnInit, AfterContentInit{

  errorHandler: any;
  course: string;
  ide : string;
  title = 'app';
  data: Enrollments[];
  url: string;
  month = [];
  price = [];
  chart = [];

  constructor(private httpClient: HttpClient,
              private coursesValuesService: CoursesValuesService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngAfterContentInit(){
// Comienza el AfterCOntentInit

    this.httpClient.get(this.url).subscribe((res: Enrollments[]) => {
// Comienza el Subscribe
try {
      res.forEach(y => {
        this.month.push(y.user.name);

        let nombre: any;
        nombre = y.user.name;
        let numero: any;
        numero = y.grades.current_score;
        let multi: any;
        multi = numero * 0.2;

        this.price.push(multi);
      });

    } catch (e) {
      this.router.navigate(['native']);
    }


      // Inicio Chart
this.chart = new Chart('canvas', {
  type: 'bar',
  data: {
    labels: this.month,
    datasets: [
      {
        data: this.price,
        borderColor: '#3cba9f',
        fill: false
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: true
      }],
      yAxes: [{
        display: true
      }],
    }
  }
}
);
// Final Chart



    }
// Termina el Subscribe
    );

// Termina el AfterComponentInit()
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.ide = params.get("id")
    })
    this.url = 'https://canvas-api-wquesada.c9users.io/api/courses/' + this.ide + '/enrollments';
    this.course = this.coursesValuesService.getName(); }

  }
