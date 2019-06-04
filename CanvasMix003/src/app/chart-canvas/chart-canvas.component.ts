import { Component, OnInit, AfterContentInit } from '@angular/core';
// Imports propios
import { Chart } from 'chart.js';
import { CanvasMasterValuesService } from '../canvas-master-values.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Data } from './data/Data';

@Component({
  selector: 'app-chart-canvas',
  templateUrl: './chart-canvas.component.html',
  styleUrls: ['./chart-canvas.component.scss']
})
export class ChartCanvasComponent implements OnInit, AfterContentInit {

  // Objetos

  errorHandler: any;
  courseName: string;
  courseID: string;
  title = 'app';
  data: Data[];
  dataUrl: string;
  month = [];
  price = [];
  chart = [];


// BMD Chart
chartType: string;
chartDatasets: any;
chartLabels: any;
chartOptions: any;
chartColors: any;

  constructor(private httpClient: HttpClient,
              private coursesValuesService: CanvasMasterValuesService,
              private router: Router,
              private route: ActivatedRoute ) { }


  ngAfterContentInit() {

    this.httpClient.get(this.dataUrl).subscribe((res: Data[]) => {
      try {
      res.forEach(y => {
        this.month.push(y.user.name);

        let nombre: any;
        nombre = y.user.name;
        let numero: any;
        numero = y.grades.current_score;
        let multi: any;
        multi = numero * 0.2;

        this.price.push(Math.round(multi));
      });

    } catch (e) {
      this.router.navigate(['error']);
    }

      this.chartType = 'horizontalBar';

      this.chartDatasets = [
        { data: this.price, label: 'Nota de Alumno' }
      ];

      this.chartLabels = this.month;

      this.chartColors = [
        {
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2,
        }
      ];

      this.chartOptions = {
        responsive: true
      };
    }
  );




  }


  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.courseID = params.get('id');
    });

    this.dataUrl = 'https://canvas-api-wquesada.c9users.io/api/courses/' + this.courseID + '/enrollments';
    this.courseName = this.coursesValuesService.getcourseName();
  }

}
