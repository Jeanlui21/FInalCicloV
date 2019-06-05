import { Component, OnInit,  } from '@angular/core';
// Imports propios

import { CanvasMasterValuesService } from '../canvas-master-values.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Data } from './data/Data';

@Component({
  selector: 'app-chart-canvas',
  templateUrl: './chart-canvas.component.html',
  styleUrls: ['./chart-canvas.component.scss']
})
export class ChartCanvasComponent implements OnInit {

  // Objetos

  errorHandler: any;
  courseName: string;
  courseID: string;
  promedio: number;
  puntaje: number;
  title = 'app';

  month = [];
  price = [];

  monthPIE = [];
  pricePIE = [];

  chart = [];
  aprobados = [];
  desaprobados = [];



// BMD Chart
chartType = 'horizontalBar';
chartDatasets: any;
chartLabels: any;
chartOptions: any;
chartColors: any;

// BMD Chart
chartTypePIE = 'pie';
chartDatasetsPIE: any;
chartLabelsPIE: any;
chartOptionsPIE: any;
chartColorsPIE: any;
  constructor(private httpClient: HttpClient,
              private coursesValuesService: CanvasMasterValuesService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {


    this.route.paramMap.subscribe(params => {
      this.courseID = params.get('id');
    });

    this.courseName = this.coursesValuesService.getcourseName();
    const dataUrl = 'https://canvas-api-wquesada.c9users.io/api/courses/' + this.courseID + '/enrollments';

    this.httpClient.get(dataUrl).subscribe((res: Data[]) => {

      try {
      res.forEach(y => {

        this.month.push(y.user.name);
        const nombre: any = y.user.name;
        const numero: any = y.grades.current_score;
        const multi: any = Math.round(numero * 0.2);
        this.price.push(multi);

        this.promedio =  ((this.price.reduce( function (a, b) { return a + b; })) / this.price.length);
        this.puntaje =  (this.price.reduce( function (a, b) { return a + b; }));


        this.pricePIE.push(multi);
        this.monthPIE.push(y.user.name);

        if (multi > 13) {
          this.aprobados.push({ 'nombre': nombre, 'nota': multi});

        } else {
          this.desaprobados.push({ 'nombre': nombre, 'nota': multi});

        }







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
            '#d50000',
            '#c51162',
            '#aa00ff',
            '#311b92',
            '#1a237e',
            '#0d47a1',
            '#6200ea',
            '#304ffe',
            '#e65100',
            '#ffc400',
            '#1b5e20',
            '#e64a19'
          ],
          borderColor: [
            '#4285F4'
          ],
          borderWidth: 2,
        }
      ];

      this.chartOptions = {
        responsive: true
      };



      this.chartDatasetsPIE = [
        { data: this.pricePIE, label: 'Porcentaje' }
      ];

      this.chartLabelsPIE = this.monthPIE;

      this.chartColorsPIE = [
        {
          backgroundColor: [
            '#d50000',
            '#c51162',
            '#aa00ff',
            '#311b92',
            '#1a237e',
            '#0d47a1',
            '#6200ea',
            '#304ffe',
            '#e65100',
            '#ffc400',
            '#1b5e20',
            '#e64a19'
          ],
          hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
          borderWidth: 2,
        }
      ];

      this.chartOptionsPIE = {
        responsive: true
      };
    }
  );
  }

}
