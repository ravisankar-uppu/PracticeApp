
import {Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import {ShoppingListItem} from '../shopping-list/shoppingList.model';
import {Subject} from 'rxjs';
import {Http} from '@angular/http';

@Injectable()
export class RecipeService{

  private selectedRecipe:Recipe;
  recipeUpdateBroadcast=new Subject<Recipe>();
  recipesUpdateBroadcast=new Subject<Recipe[]>();

  private recipes: Recipe[]=[
  new Recipe(1
    ,"Paneer"
  ,"65"
  ,"http://cdn3.foodviva.com/static-content/food-images/chinese-recipes/paneer-manchurian-recipe/paneer-manchurian-2.jpg"
  ,[{Name:'Paneer',Amount:2},
    {Name:'Onion',Amount:4}
  ]
  )
  ,
  new Recipe(2
  ,"Chicken"
  ,"65"
  ,"http://www.sankrantihotels.com/wp-content/uploads/2014/11/andhra-chicken-651.jpg"
  ,[{Name:'Chicken',Amount:2},
    {Name:'Chillies',Amount:4}
  ]
  )
  ];

  constructor(private http:Http){

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
    this.recipes.push(recipe);
    this.recipesUpdateBroadcast.next(this.recipes);
    return this.http.post('https://practiceapp-e47f8.firebaseio.com/recipes.json',recipe);
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