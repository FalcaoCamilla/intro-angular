import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

//let list = new FoodListService();
//this.foodList = list.foodList()
  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res,
      error => console.log(error)
    );

    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Você adicionou um item => ${res.nome}`);
        return this.foodList.push(res);
      }
    )
  }

  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe(
      res => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error => error
    )
  }

  public foodListEdit(value: string, id:number){
    return this.foodListService.foodListEdit(value, id).subscribe(
      res => {
        return console.log(res)
      },
      error => error
    )
  }

}
