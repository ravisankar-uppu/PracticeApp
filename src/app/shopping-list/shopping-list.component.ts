import { Component, OnInit } from '@angular/core';
import {ShoppingListItem} from './ShoppingList.model';
import {ShoppingListService} from './shoppingList-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingListItems: ShoppingListItem[]=[];
  
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.shoppingListItems=this.shoppingListService.getShoppingListItems();
  }

  onEditItem(index:number){
    this.shoppingListService.shoppingListEdited.next(index);
  }

}
