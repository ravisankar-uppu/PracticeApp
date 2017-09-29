
import * as ShoppingListActions from './shopping-list.actions';
import { ShoppingListItem } from './../shoppingList.model';

const initialState={
    shoppingListItems:[
        new ShoppingListItem('Apple',5),
        new ShoppingListItem('Banana',2)
    ]
};    

export function shoppingListReducer(state=initialState,action:ShoppingListActions.ShoppingListActions){
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT:{
            return {
                ...state,
                shoppingListItems:[...state.shoppingListItems,action.payload]
            }
        }        
        default:{
            return state;
        }
    }
}