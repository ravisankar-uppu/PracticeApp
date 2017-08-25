import { Component, OnInit, ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import {ShoppingListItem} from '../ShoppingList.model';
import {ShoppingListService} from '../shoppingList-service';


@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.css']
})
export class ShoppingDetailComponent implements OnInit {

  @ViewChild('itemName') itemName:ElementRef;
  @ViewChild('itemAmount') itemAmount:ElementRef;
  @Output() shoppingListOutput=new EventEmitter();
  shoppingListItem:ShoppingListItem;
  shoppingList:ShoppingListItem[]=[];

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  AddItem(){
    this.shoppingListItem=new ShoppingListItem();
    this.shoppingListItem.Name=this.itemName.nativeElement.value;
    this.shoppingListItem.Amount=this.itemAmount.nativeElement.value;
    this.shoppingListService.addShoppingListItem(this.shoppingListItem);
  }

  DeleteItem(){

  }

  ClearItem(){
    this.itemName.nativeElement.value='';
    this.itemAmount.nativeElement.value='';
  }

}
