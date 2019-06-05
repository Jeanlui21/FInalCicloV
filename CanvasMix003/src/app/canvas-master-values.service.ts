import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CanvasMasterValuesService {
  courseName: any;
  id: any;
  constructor(private http: HttpClient) { }

  public setcourseName( id , name ){
    this.courseName = name;
    this.id = id;
  }

  public getcourseName() {
    return this.courseName;
  }

}
