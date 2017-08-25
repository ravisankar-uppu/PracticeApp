
import {EventEmitter} from '@angular/core';
import { Recipe } from './recipe.model';
import {ShoppingListItem} from '../shopping-list/shoppingList.model';


export class RecipeService{

  private recipes: Recipe[]=[
  new Recipe("Paneer"
  ,"65"
  ,"http://cdn3.foodviva.com/static-content/food-images/chinese-recipes/paneer-manchurian-recipe/paneer-manchurian-2.jpg"
  ,[{Name:'Paneer',Amount:2},
    {Name:'Onion',Amount:4}
  ]
  )
  ,
  new Recipe("Chicken"
  ,"65"
  ,"http://www.sankrantihotels.com/wp-content/uploads/2014/11/andhra-chicken-651.jpg"
  ,[{Name:'Chicken',Amount:2},
    {Name:'Chillies',Amount:4}
  ]
  )
  ];

  selectedRecipe=new EventEmitter<Recipe>();

  getRecipes(){
      return this.recipes.slice();
  }



}