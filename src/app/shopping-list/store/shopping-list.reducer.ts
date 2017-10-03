
import * as ShoppingListActions from './shopping-list.actions';
import { ShoppingListItem } from './../shoppingList.model';

// export interface AppState{
//     shoppingList:State;
// }

export interface State{
    shoppingListItems:ShoppingListItem[];
    editedItem:ShoppingListItem;
    editedItemIndex:number;
}

const initialState:State={
    shoppingListItems:[
        new ShoppingListItem('Apple',5),
        new ShoppingListItem('Banana',2)
    ],
    editedItem:null,
    editedItemIndex:-1
};    

export function shoppingListReducer(state=initialState,action:ShoppingListActions.ShoppingListActions){
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                shoppingListItems:[...state.shoppingListItems,action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                shoppingListItems:[...state.shoppingListItems,...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient=state.shoppingListItems[state.editedItemIndex]; 
            const updatedIngrtedient={
                ...ingredient,
                ...action.payload.shoppingListItem
            };
            const ingredients=[...state.shoppingListItems];
            ingredients[state.editedItemIndex]=updatedIngrtedient;
            return {
                ...state,
                shoppingListItems:ingredients,
                editedItem:null,
                editedItemIndex:-1
            }; 
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients=[...state.shoppingListItems]; 
            oldIngredients.splice(state.editedItemIndex,1);
            return{
                ...state,
                shoppingListItems:oldIngredients,
                editedItem:null,
                editedItemIndex:-1
            };
        case ShoppingListActions.START_EDIT:
            const editedIngredient={...state.shoppingListItems[action.payload.index]}; 
            return{
                ...state,
                editedItem:editedIngredient,
                editedItemIndex:action.payload.index
            }; 
        case ShoppingListActions.STOP_EDIT:
            return{
                ...state,
                editedItem:null,
                editedItemIndex:-1
            };    
        default:
            return state;
    }
}