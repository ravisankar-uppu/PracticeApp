
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeState:Observable<fromRecipe.State>;

  constructor(private store:Store<fromRecipe.FeatureState>
  ) { }

  ngOnInit() { 
    this.store.dispatch(new RecipeActions.FetchRecipes());
    this.recipeState=this.store.select('recipes');
  }
}
