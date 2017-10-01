import {ShoppingListItem} from './shoppingList.model'
import {Subject} from 'rxjs';

export class ShoppingListService{
    private shoppingListItems:ShoppingListItem[]=[];
    shoppingListEdited=new Subject<number>();
    shoppingListItemsUpdated=new Subject<ShoppingListItem[]>();

    getShoppingListItems(){
        return this.shoppingListItems;
    }

    getShoppingListItemById(index:number):ShoppingListItem{
        return this.shoppingListItems[index];
    }
    
    addShoppingListItem(shoppingListItem:ShoppingListItem){
        this.shoppingListItems.push(shoppingListItem);
        //this.broadCastShoppingListItems();
    }

    addShoppingListItems(shoppingListItems:ShoppingListItem[]){
        this.shoppingListItems.push(...shoppingListItems);
        //this.broadCastShoppingListItems();
    }

    updateShoppingListItem(index:number,shoppingListItem:ShoppingListItem){
        this.shoppingListItems[index]=shoppingListItem;
        //this.broadCastShoppingListItems();
    }

    deleteShoppingListItem(index:number){
      this.shoppingListItems.splice(index,1);
      //this.broadCastShoppingListItems();
    }

    // broadCastShoppingListItems(){  
    //   this.shoppingListItemsUpdated.next(this.shoppingListItems.slice());
    // }
}