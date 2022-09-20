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
      res => alert(`Você adicionou um item => ${res}`)
    )
  }

}
