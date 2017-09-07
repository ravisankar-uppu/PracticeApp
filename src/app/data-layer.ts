
import {Http,Response} from '@angular/http';
import {Common} from './common'
import {Observable} from 'rxjs/Observable';
import {Injectable,OnDestroy} from '@angular/core';
import {RecipeService} from './recipes/recipe-service';
import {Recipe} from './recipes/recipe.model';
import {AuthenticationService} from './auth/auth-service';
import {Subscription} from 'rxjs';

@Injectable()
export class DataLayer implements OnDestroy{
    recipes:Recipe[]=[];
    recipe:Recipe=new Recipe();
    common:Common=new Common();
    tokenSubscription=new Subscription();
    token:string;

    constructor(private http:Http,
        private recipeService:RecipeService,
        private authService:AuthenticationService){
    }

    getRecipes(){
        this.tokenSubscription=this.authService.tokenBroadcast.subscribe(token=>this.token=token);
        if(this.token===undefined)
            this.token=this.authService.getToken();
        if(this.token===undefined)
            this.token=this.authService.token;
       
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
        this.http.put(this.common.webAPIUrl+'?auth='+this.token,recipes)
        .subscribe(
            (response:Response)=>{
                this.getRecipes();
            }
        );
    }
    
    ngOnDestroy(){
        this.tokenSubscription.unsubscribe();
    }
}