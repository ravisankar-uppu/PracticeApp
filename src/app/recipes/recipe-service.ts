
import {Injectable,OnDestroy} from '@angular/core';
import { Recipe } from './recipe.model';
import {ShoppingListItem} from '../shopping-list/shoppingList.model';
import {Subject} from 'rxjs';
import {Http,Response} from '@angular/http';
import {Common} from '../common';
import 'rxjs/Rx';
import {AuthenticationService} from '../auth/auth-service';

@Injectable()
export class RecipeService{

  private selectedRecipe:Recipe;
  recipeUpdateBroadcast=new Subject<Recipe>();
  recipesUpdateBroadcast=new Subject<Recipe[]>();
  common:Common=new Common();
  private recipes: Recipe[]=[];
  getRecipesPromise:any;

  constructor(private http:Http,private authService:AuthenticationService){
  }

    setRecipes(recipes:Recipe[]){
      this.recipes=recipes;
      this.recipesUpdateBroadcast.next(this.recipes.slice());
    }

    getRecipes(){
      return this.recipes.slice();
    }

  getRecipeById(id:number){
      for(let recipe of this.recipes){
            if(recipe.id==id){
                this.selectedRecipe=recipe;
                break;
            }
        }
        return this.selectedRecipe;
  }

  addRecipe(recipe:Recipe){
    var result= this.http.post(this.common.webAPIUrl,recipe);
    recipe.id=this.getNewRecipeId();
    this.recipes.push(recipe);
    this.recipesUpdateBroadcast.next(this.recipes);
    return result;
  }

  updateRecipeDetails(recipe:Recipe){
    for(var i=0;i<this.recipes.length;i++){
      if(this.recipes[i].id===recipe.id){
        this.recipes[i]=recipe;       
        this.recipeUpdateBroadcast.next(this.recipes[i]);
        break;
      }
    }
  }

  deleteRecipe(id:number){
   this.recipes.splice(this.recipes.findIndex(i=>i.id==id),1);
   this.recipesUpdateBroadcast.next(this.recipes);
  }

  deleteIngredient(recipe:Recipe,ingredientIndex:number){
    for(var i=0;i<this.recipes.length;i++){
      if(this.recipes[i].id===recipe.id){
          this.recipes[i].ingredients.splice(ingredientIndex,1);
          this.recipeUpdateBroadcast.next(this.recipes[i]);
          break;
      }
    }
  }

  getNewRecipeId(){
    var newRecipeId=0;
    this.recipes.map(function(recipe){     
      if (recipe.id > newRecipeId) newRecipeId = recipe.id;    
  });
    return newRecipeId+1;
  }

}