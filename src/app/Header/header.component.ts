

import { Store } from '@ngrx/store';
import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as fromAuth from '../auth/store/auth.reducer';
import { Observable } from 'rxjs/Observable';
import * as AuthActions from '../auth/store/auth.actions';
import * as fromRecipe from '../recipes/store/recipe.reducers';
import * as RecipeActions from '../recipes/store/recipe.actions';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent implements OnInit
{
    authState:Observable<fromAuth.State>;
    recipeState:Observable<fromRecipe.State>;

    ngOnInit(){
        this.authState=this.store.select('auth');
    }

    constructor(private router:Router,
        private store:Store<fromRecipe.FeatureState>){

    }
    fetchData(){
        this.router.navigate(['recipes']);
    }

    saveData(){
        this.store.dispatch(new RecipeActions.SaveRecipes());
    }

    signOut(){
        this.store.dispatch(new AuthActions.TrySignOut());
    }
}