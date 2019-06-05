import { Component, OnInit } from '@angular/core';
// import's hechos
import { CanvasMasterValuesService } from '../canvas-master-values.service';
import { CanvasInfoService } from '../canvas-info.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dash-canvas',
  templateUrl: './dash-canvas.component.html',
  styleUrls: ['./dash-canvas.component.scss']
})
export class DashCanvasComponent implements OnInit {

  lista: any;

  constructor(private canvascoursesService: CanvasInfoService,
              private router: Router,
              private canvasmasterValues: CanvasMasterValuesService) {}

  goGoto(id, name) {
    // Envio de parametros por medio de getter y setter
    const parametros = [];
    parametros.push({ 'nombre': name, 'id': id});
    this.canvasmasterValues.setcourseName(name);
    this.router.navigate(['charts', id]);
  }

  ngOnInit() {
    this.canvascoursesService.retornar().subscribe(result => this.lista = result);
  }

}
