
import { Store } from '@ngrx/store';
import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import {ShoppingListItem} from '../ShoppingList.model';
import {NgForm} from '@angular/Forms';
import {Subscription} from 'rxjs/Subscription';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';


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

  constructor(private store:Store<fromApp.AppState>) { }

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
  }

  

  AddItem(form:NgForm){
    var formValues=form.value;
    this.shoppingListItem=new ShoppingListItem(formValues.item,formValues.amount);
    this.shoppingListItem.Name=formValues.item;
    this.shoppingListItem.Amount=formValues.amount;
    if(this.editMode){
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({index:this.editedIndex,shoppingListItem:this.shoppingListItem}));
    }
    else{
      this.store.dispatch(new ShoppingListActions.AddIngredient(this.shoppingListItem));
    }
    form.reset();
    this.editMode=false;
  }

  DeleteItem(){
    this.store.dispatch(new ShoppingListActions.DeleteIngredient({index:this.editedIndex}));
    this.editMode=false;
    this.slForm.reset();
  }

  ClearItem(form:NgForm){
    form.reset();
    this.editMode=false;
  }

  ngOnDestroy(){
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.shoppingListEditSubscription.unsubscribe();
  }

}
