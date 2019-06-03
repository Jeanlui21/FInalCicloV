import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Enrollments } from './resources/Enrollments';


@Component({
  selector: 'app-coursechart',
  templateUrl: './coursechart.component.html',
  styleUrls: ['./coursechart.component.css']
})
export class CoursechartComponent implements OnInit {
  course = '3430';
  title = 'app';
  data: Enrollments[];
  url = 'https://canvas-api-wquesada.c9users.io/api/courses/'+this.course+'/enrollments';
  month = [];
  price = [];
  chart = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: Enrollments[]) => {
      res.forEach(y => {
        this.month.push(y.user.name);
        this.price.push(y.grades.current_score);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
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
      });
    });
  }

  pintar(){

  }



  }
