import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import {ActivatedRoute,Params,Router} from '@angular/router';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  recipeState:Observable<fromRecipe.State>;
  id:number;
  selectedRecipe:Recipe;

  constructor(private route:ActivatedRoute,
  private router:Router,
private store:Store<fromRecipe.FeatureState>) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];  //The "+" sign before the params keyword makes it an integer.
      this.store.select('recipes')
      .subscribe((recipeState:fromRecipe.State)=>{
        recipeState.recipes.forEach((recipe:Recipe) => {
          if(recipe.id===this.id)
            this.selectedRecipe=recipe;
        });
      });
    });   
  }

  AddToShoppingList(){
    const selectedRecipe=this.store.select('recipes')
    .take(1)
    .subscribe((recipeState:fromRecipe.State)=>{
      this.store.dispatch(new ShoppingListActions.AddIngredients(this.selectedRecipe.ingredients));
    });    
  }

  deleteRecipe(){
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }
}
