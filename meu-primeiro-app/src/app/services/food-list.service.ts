import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type NewType = Observable;

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

  private url: string = "http://localhost:3000/"

  constructor(private http: HttpClient ) { }

  // public foodList(){
  //   return this.list;
  // }

  public foodList(): NewType{
    return this.http.get(this.url + "list-food")
  }

  public foodListAdd(value: string){
    this.foodListAlert(value)
    return this.list.push(value);
  }

  public foodListAlert(value: string){
    return this.emitEvent.emit(value)
  }
}


