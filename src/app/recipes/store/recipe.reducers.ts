
import { Action } from '@ngrx/store';
import {Recipe} from '../recipe.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';
import { ShoppingListItem } from './../../shopping-list/shoppingList.model';
export interface FeatureState extends fromApp.AppState{
    recipes:State
}

export interface State{
    recipes:Recipe[]
}

const initialState:State={    
    recipes:[]
};

export function RecipeReducers(state=initialState,action:RecipeActions.RecipeActions){

    switch(action.type){
        case RecipeActions.SET_RECIPES:
            return{
                ...state,
                recipes:[...action.payload]
            };
        case RecipeActions.ADD_RECIPE:
            const maxId=state.recipes.length+1;
            const newRecipe=action.payload;
            newRecipe.id=maxId;
            return{
                ...state,
                recipes:[...state.recipes,newRecipe]
            };
        case RecipeActions.UPDATE_RECIPE:
            //const recipe=state.recipes[action.payload.index];
            // const updatedRecipe={...recipe,
            //     ...action.payload.updatedRecipe
            // };
             const updatedRecipes=[...state.recipes];
            // updatedRecipes[action.payload.index]=updatedRecipe;            
            var i=0;
            var loop=true;
            
            updatedRecipes.forEach((recipe:Recipe)=>{
                if(recipe.id===action.payload.index && loop){                    
                    updatedRecipes[i]=action.payload.updatedRecipe;
                    loop=false;
                }
                i=i+1;
            });
            return{
                ...state,
                recipes:updatedRecipes
            };
        case RecipeActions.DELETE_RECIPE:
            var oldRecipes:Recipe[]=[];
            state.recipes.forEach((recipe:Recipe)=>{
                if(recipe.id!=action.payload){
                    oldRecipes.push(recipe);
                }
            });
            //oldRecipes.splice(action.payload,1);
            console.log(oldRecipes);
            return{
                ...state,
                recipes:oldRecipes
            };
        default:        
            return state;
    }

}