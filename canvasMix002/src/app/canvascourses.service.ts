import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CanvascoursesService {

  constructor(private http: HttpClient) { }
  retornar(){
    let path_url = "https://canvas-api-wquesada.c9users.io/api/courses/";
    return this.http.get(path_url);
  }
}
