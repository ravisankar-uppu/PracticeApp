import { Store } from '@ngrx/store';

import {Http,Response} from '@angular/http';
import {Common} from './common'
import {Observable} from 'rxjs/Observable';
import {Injectable,OnDestroy} from '@angular/core';
import {RecipeService} from './recipes/recipe-service';
import {Recipe} from './recipes/recipe.model';
import {AuthenticationService} from './auth/auth-service';
import {Subscription} from 'rxjs';
import * as fromApp from './store/app.reducers';
import * as fromAuth from './auth/store/auth.reducer';

@Injectable()
export class DataLayer implements OnDestroy{
    recipes:Recipe[]=[];
    recipe:Recipe=new Recipe();
    common:Common=new Common();
    tokenSubscription=new Subscription();
    token:string;
    authState:Observable<fromAuth.State>;

    constructor(private http:Http,
        private recipeService:RecipeService,
        private authService:AuthenticationService,
        private store:Store<fromApp.AppState>){
    }

    getRecipes(){
        // this.tokenSubscription=this.authService.tokenBroadcast.subscribe(token=>this.token=token);
        this.authState=this.store.select('auth');

        this.authState.subscribe(authState=>this.token=authState.token)
        
        // if(this.token===undefined)
        //     this.token=this.authState;
        // if(this.token===undefined)
        //     this.token=this.authService.token;
       
        this.http.get(this.common.webAPIUrl+'?auth='+this.token)
        .subscribe(
            (response:Response)=>{
            this.recipes=[];
            const recipes:Recipe[]= response.json();
            var keys=Object.keys(recipes);
            keys.forEach((key)=>{
                this.recipe=new Recipe();
                this.recipe=recipes[key];
                this.recipe.guid=key;
                this.recipes.push(this.recipe);
              })
            this.recipeService.setRecipes(this.recipes.slice());
            }
        );
    }

    saveData(recipes:Recipe[]){
        this.authState.subscribe(authState=>this.token=authState.token);
        this.http.put(this.common.webAPIUrl+'?auth='+this.token,recipes)
        .subscribe(
            (response:Response)=>{
                this.getRecipes();
            }
        );
    }
    
    ngOnDestroy(){
        //this.tokenSubscription.unsubscribe();
    }
}