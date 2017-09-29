

import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {ShoppingListItem} from './ShoppingList.model';
import {ShoppingListService} from './shoppingList-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  shoppingListState: Observable<{shoppingListItems:ShoppingListItem[]}>;
  shoppingListItems:ShoppingListItem[];
  shoppingListItemsSubscription:Subscription;
  
  constructor(private shoppingListService:ShoppingListService,private store:Store<{shoppingList:
    {shoppingListItems:ShoppingListItem[]}}>) { }

  ngOnInit() {
     //this.shoppingListItems=this.shoppingListService.getShoppingListItems();
    this.shoppingListState=this.store.select('shoppingList');
    // this.shoppingListItemsSubscription=this.shoppingListService.shoppingListItemsUpdated.subscribe((shoppingListItems:ShoppingListItem[])=>{
    //   this.shoppingListItems=shoppingListItems;
    // });
  }

  onEditItem(index:number){
    this.shoppingListService.shoppingListEdited.next(index);
  }

  ngOnDestroy(){
    //this.shoppingListItemsSubscription.unsubscribe();
  }

}
