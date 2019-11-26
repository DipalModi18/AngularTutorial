import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  serviceProperty = "This is service";
  
  constructor() { }

  showTodayDate()
  {
    var today = new Date();
    return today;
  }
}
