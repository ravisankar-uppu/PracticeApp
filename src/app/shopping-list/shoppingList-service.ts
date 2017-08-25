import {ShoppingListItem} from './shoppingList.model'

export class ShoppingListService{
    private shoppingListItems:ShoppingListItem[]=[];

    getShoppingListItems(){
        return this.shoppingListItems;
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
}