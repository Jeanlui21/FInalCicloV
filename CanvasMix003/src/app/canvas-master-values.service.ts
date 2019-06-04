import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanvasMasterValuesService {
  courseName: any;
  constructor() { }

  public setcourseName( data ){
    this.courseName = data;
  }

  public getcourseName() {
    return this.courseName;
  }
}
