import { Component, OnInit,Input  } from '@angular/core';
import { Recipe } from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shoppingList-service';
import {ActivatedRoute,Data,Params,Router} from '@angular/router';
import {IRecipe} from '../recipe.model';
import {RecipeService} from '../recipe-service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  selectedRecipe:Recipe;
  id:number;

  constructor(private shoppingListService:ShoppingListService,
  private route:ActivatedRoute,
  private recipeService:RecipeService,
  private router:Router) { 
    
  }

  ngOnInit() {
    if(this.id!==null)
      this.selectedRecipe=this.recipeService.getRecipeById(this.id);
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];  //The "+" sign before the params keyword makes it an integer.
      this.selectedRecipe=this.recipeService.getRecipeById(this.id);
    });
    
   
  }

  AddToShoppingList(selectedRecipe:Recipe){
    this.shoppingListService.addShoppingListItems(selectedRecipe.ingredients);
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.selectedRecipe.id);
    this.router.navigate(['/recipes']);
  }
}
