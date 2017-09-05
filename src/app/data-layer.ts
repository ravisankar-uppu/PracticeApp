
import {Http,Response} from '@angular/http';
import {Common} from './common'
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {RecipeService} from './recipes/recipe-service';
import {Recipe} from './recipes/recipe.model';

@Injectable()
export class DataLayer{
    recipes:Recipe[]=[];
    recipe:Recipe=new Recipe();
    common:Common=new Common();
    constructor(private http:Http,private recipeService:RecipeService){
    }

    getRecipes(){
        this.http.get(this.common.webAPIUrl)
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
}