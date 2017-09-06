import {Component,Output,EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {RecipeService} from '../recipes/recipe-service';
import {DataLayer} from '../data-layer';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{    

    constructor(private router:Router,private recipeService:RecipeService,private dataLayer:DataLayer){

    }
    fetchData(){
        this.router.navigate(['recipes']);
    }

    saveData(){
        this.dataLayer.saveData(this.recipeService.getRecipes());
        this.router.navigate(['recipes']);
    }
}