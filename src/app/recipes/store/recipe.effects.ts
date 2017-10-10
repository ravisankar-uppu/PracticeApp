

import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/switchMap';
import {fromPromise} from 'rxjs/observable/fromPromise';
import * as RecipeActions from  './recipe.actions';
import { Common } from './../../common';
import { Recipe } from './../recipe.model';
import * as firebase from 'firebase';
import * as fromRecipe from '../store/recipe.reducers';

@Injectable()
export class RecipeEffects{
    
    common:Common=new Common();
    recipes:Recipe[];
    recipe:Recipe;
    token:string;

    @Effect()
    fetchRecipes=this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap((action:RecipeActions.FetchRecipes)=>{
       return fromPromise( firebase.auth().currentUser.getIdToken());        
    })
    .switchMap((token:string)=>{
        return this.http.get(this.common.webAPIUrl+'?auth='+token);
    })
    .switchMap((response:Response)=>{
        this.recipes=[];
        const recipes:Recipe[]= response.json();
        var keys=Object.keys(recipes);
        keys.forEach((key)=>{
            this.recipe=new Recipe();
            this.recipe=recipes[key];
            this.recipe.guid=key;
            this.recipes.push(this.recipe);
          });
          return this.recipes;
    })
    .mergeMap(()=>{
        return[{
            type:RecipeActions.SET_RECIPES,
            payload:this.recipes
        }];
    });

    @Effect({dispatch:false})
    saveRecipes=this.actions$
    .ofType(RecipeActions.SAVE_RECIPES)
    .switchMap((action:RecipeActions.SaveRecipes)=>{
        return fromPromise( firebase.auth().currentUser.getIdToken()); 
    })
    .switchMap((token:string)=>{
        this.store.select('recipes')
        .take(1)
        .subscribe((recipeState:fromRecipe.State)=>{
            this.recipes=recipeState.recipes;
        })
        return this.http.put(this.common.webAPIUrl+'?auth='+token,this.recipes);
    })
    .do(()=>{
        this.router.navigate(['/recipes'])
    });

    constructor(private actions$:Actions,
        private http:Http,
        private store:Store<fromRecipe.FeatureState>,
        private router:Router){

    }
}