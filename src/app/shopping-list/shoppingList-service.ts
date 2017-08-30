import {ShoppingListItem} from './shoppingList.model'
import {Subject} from 'rxjs';

export class ShoppingListService{
    private shoppingListItems:ShoppingListItem[]=[];
    shoppingListEdited=new Subject<number>();

    getShoppingListItems(){
        return this.shoppingListItems;
    }

    getShoppingListItemById(index:number):ShoppingListItem{
        return this.shoppingListItems[index];
    }
    
    addShoppingListItem(shoppingListItem:ShoppingListItem){
        this.shoppingListItems.push(shoppingListItem);
    }

    addShoppingListItems(shoppingListItems:ShoppingListItem[]){
        // shoppingListItems.forEach(shoppingListItem => {
        //     this.addShoppingListItem(shoppingListItem)
        // });
        this.shoppingListItems.push(...shoppingListItems);
    }

    updateShoppingListItem(index:number,shoppingListItem:ShoppingListItem){
        this.shoppingListItems[index]=shoppingListItem;
    }
}