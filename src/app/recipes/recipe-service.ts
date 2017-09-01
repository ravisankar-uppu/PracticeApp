
import {Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import {ShoppingListItem} from '../shopping-list/shoppingList.model';
import {Subject} from 'rxjs';
import {Http,Response} from '@angular/http';
import {Common} from '../common';
import {DataLayer} from '../data-layer';
import 'rxjs/Rx';

@Injectable()
export class RecipeService{

  private selectedRecipe:Recipe;
  recipeUpdateBroadcast=new Subject<Recipe>();
  recipesUpdateBroadcast=new Subject<Recipe[]>();
  common:Common=new Common();
  private recipes: Recipe[]=[];
  getRecipesPromise:any;

  // [
  // new Recipe(1
  //   ,"Paneer"
  // ,"65"
  // ,"http://cdn3.foodviva.com/static-content/food-images/chinese-recipes/paneer-manchurian-recipe/paneer-manchurian-2.jpg"
  // ,[{Name:'Paneer',Amount:2},
  //   {Name:'Onion',Amount:4}
  // ]
  // )
  // ,
  // new Recipe(2
  // ,"Chicken"
  // ,"65"
  // ,"http://www.sankrantihotels.com/wp-content/uploads/2014/11/andhra-chicken-651.jpg"
  // ,[{Name:'Chicken',Amount:2},
  //   {Name:'Chillies',Amount:4}
  // ]
  // )
  // ];

  constructor(private http:Http,private dataLayer:DataLayer){
  }

    // getRecipes(){   
    //   this.dataLayer.getRecipes().subscribe(
    //     (recipes:any[])=>{
    //       this.recipes=[];        
    //       var keys=Object.keys(recipes);
    //       keys.forEach((key)=>{
    //         this.recipes.push(recipes[key]);
    //       })
    //       return this.recipes.slice();     
    //     },
    //     (error)=> console.log(error)
    //   );
    //   return this.recipes.slice();
    // }

  getRecipes(){
    return this.http.get(this.common.webAPIUrl)
    .map(
        (response:Response)=>{
        const data= response.json();
        return data;
        }
    ); 
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

}