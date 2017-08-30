import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import {ShoppingListItem} from '../ShoppingList.model';
import {ShoppingListService} from '../shoppingList-service';
import {NgForm} from '@angular/Forms';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.css']
})
export class ShoppingDetailComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm:NgForm;

  shoppingListItem:ShoppingListItem;
  shoppingList:ShoppingListItem[]=[];
  editMode:boolean=false;
  editedIndex:number;
  shoppingListEditSubscription:Subscription;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.shoppingListEditSubscription=this.shoppingListService.shoppingListEdited.subscribe(
      (index:number)=>{
        this.editedIndex=index;
        this.editMode=true;
        this.shoppingListItem=this.shoppingListService.getShoppingListItemById(index);
        this.slForm.setValue({
          item:this.shoppingListItem.Name,
          amount:this.shoppingListItem.Amount
        });
    });
  }

  

  AddItem(form:NgForm){
    var formValues=form.value;
    this.shoppingListItem=new ShoppingListItem();
    this.shoppingListItem.Name=formValues.item;
    this.shoppingListItem.Amount=formValues.amount;
    // this.shoppingListService.addShoppingListItem(this.shoppingListItem);
    // this.shoppingListItem.Name=this.slForm.value.item;
    // this.shoppingListItem.Amount=this.slForm.value.amount;
    if(this.editMode){
      this.shoppingListService.updateShoppingListItem(this.editedIndex,this.shoppingListItem)
    }
    else{
      this.shoppingListService.addShoppingListItem(this.shoppingListItem)
    }
    form.reset();
    this.editMode=false;
  }

  DeleteItem(){
    this.editMode=false;
  }

  ClearItem(form:NgForm){
    form.reset();
    this.editMode=false;
  }

  ngOnDestroy(){
    this.shoppingListEditSubscription.unsubscribe();
  }

}
