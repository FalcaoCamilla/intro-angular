import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<string>=[];

//let list = new FoodListService();
//this.foodList = list.foodList()
  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList();
  }

}
