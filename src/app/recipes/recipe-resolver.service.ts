import {IRecipe} from './recipe.model';
import {ActivatedRouteSnapshot,RouterStateSnapshot,Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {RecipeService} from './recipe-service';
import {Injectable} from '@angular/core';


@Injectable()
export class RecipeResolver implements Resolve<IRecipe>{
    constructor(private recipeService:RecipeService){

    }

    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):
    Promise<IRecipe> | IRecipe | Observable<IRecipe>
    {
        return this.recipeService.getRecipeById(+route.params['id']);
    }
}