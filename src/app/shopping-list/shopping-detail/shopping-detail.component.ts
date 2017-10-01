import { AddIngredient } from './../store/shopping-list.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import {ShoppingListItem} from '../ShoppingList.model';
import {ShoppingListService} from '../shoppingList-service';
import {NgForm} from '@angular/Forms';
import {Subscription} from 'rxjs/Subscription';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducer';


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

  constructor(private shoppingListService:ShoppingListService,private store:Store<fromShoppingList.AppState>) { }

  ngOnInit() {

    this.shoppingListEditSubscription=this.store.select('shoppingList').subscribe(
      data=>{        
        if(data.editedItemIndex>-1){
          this.editMode=true;
          this.shoppingListItem=data.editedItem;
          this.slForm.setValue({
            item:this.shoppingListItem.Name,
            amount:this.shoppingListItem.Amount
          });
        }else{
          this.editMode=false;
        }
      }
    );

    // this.shoppingListEditSubscription=this.shoppingListService.shoppingListEdited.subscribe(
    //   (index:number)=>{
    //     this.editedIndex=index;
    //     this.editMode=true;
    //     this.shoppingListItem=this.shoppingListService.getShoppingListItemById(index);
    //     this.slForm.setValue({
    //       item:this.shoppingListItem.Name,
    //       amount:this.shoppingListItem.Amount
    //     });
    // });
  }

  

  AddItem(form:NgForm){
    var formValues=form.value;
    this.shoppingListItem=new ShoppingListItem(formValues.item,formValues.amount);
    this.shoppingListItem.Name=formValues.item;
    this.shoppingListItem.Amount=formValues.amount;
    if(this.editMode){
      //this.shoppingListService.updateShoppingListItem(this.editedIndex,this.shoppingListItem);
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({index:this.editedIndex,shoppingListItem:this.shoppingListItem}));
    }
    else{
      //this.shoppingListService.addShoppingListItem(this.shoppingListItem)
      this.store.dispatch(new ShoppingListActions.AddIngredient(this.shoppingListItem));
    }
    form.reset();
    this.editMode=false;
  }

  DeleteItem(){
    //this.shoppingListService.deleteShoppingListItem(this.editedIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient({index:this.editedIndex}));
    this.editMode=false;
    this.slForm.reset();
  }

  ClearItem(form:NgForm){
    form.reset();
    this.editMode=false;
  }

  ngOnDestroy(){
    this.shoppingListEditSubscription.unsubscribe();
  }

}
