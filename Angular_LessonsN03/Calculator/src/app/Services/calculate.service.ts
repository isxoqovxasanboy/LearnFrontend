import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() {
  }
  public add(a: number, b: number):void {
// console.log(a + b);
  console.info(a + b);
  }

}
