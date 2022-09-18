import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    "X Bacon",
    "Misto",
    "Cheddar"
  ];

  private url: string = "http://localhost:3000/list-food"

  constructor() { }

  // public foodList(){
  //   return this.list;
  // }

  public foodList(){
    return
  }

  public foodListAdd(value: string){
    this.foodListAlert(value)
    return this.list.push(value);
  }

  public foodListAlert(value: string){
    return this.emitEvent.emit(value)
  }
}


