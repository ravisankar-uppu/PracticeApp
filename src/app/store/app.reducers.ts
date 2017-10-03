import {ActionReducerMap} from '@ngrx/store';
import {Action} from '@ngrx/store';
import * as fromShopping from '../shopping-list/store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';

export interface AppState{
    shoppingList:fromShopping.State,
    auth:fromAuth.State
}

const initialState:AppState={
    shoppingList:null,
    auth:null
}

export const reducers:ActionReducerMap<AppState>={
    shoppingList:fromShopping.shoppingListReducer,
    auth:fromAuth.authReducer
}