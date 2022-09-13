import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "X Bacon",
    "Misto",
    "Cheddar"
  ];

  constructor() { }

  public foodList(){
    return this.list;
  }
}


