import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import {RecipeService} from './recipe-service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  recipe:Recipe;
  recipes: Recipe[]=[];

  constructor(private recipeService:RecipeService) { 
  }

  ngOnInit() {  
    this.recipes=this.recipeService.getRecipes();
    this.recipeService.selectedRecipe.subscribe(
      (recipe:Recipe)=>{
        this.recipe=recipe;
      }
      );
  }

  
  
}
