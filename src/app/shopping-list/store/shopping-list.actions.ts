import {Action} from '@ngrx/store';
import { ShoppingListItem } from './../shoppingList.model';

export const ADD_INGREDIENT='ADD_INGREDIENT';

export class AddIngredient implements Action{
    readonly type=ADD_INGREDIENT;
    constructor(public payload:ShoppingListItem){
    }    
}

export type ShoppingListActions=AddIngredient;
