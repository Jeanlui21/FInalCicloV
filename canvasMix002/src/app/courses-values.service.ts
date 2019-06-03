import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesValuesService {

  ids: any;
  name: any;

  constructor() { }

  public setExtras(data) {
    this.ids = data;
  }

  public getExtras() {
    return this.ids;
  }

  public setName(coursename){
    this.name = coursename;
  }

  public getName(){
    return this.name;
  }


}
