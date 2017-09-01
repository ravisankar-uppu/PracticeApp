import { Component, OnInit,OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe-service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes:Recipe[];
  recipeUpdateSubscription:Subscription;
  recipesUpdateSubscription:Subscription;

  constructor(private recipeService:RecipeService,private router:Router) { }

  ngOnInit() { 
    this.recipeService.getRecipes().subscribe(
      (recipes:any[])=>{
              this.recipes=[];        
              var keys=Object.keys(recipes);
              keys.forEach((key)=>{
                this.recipes.push(recipes[key]);
              })
            },
            (error)=> console.log(error)
    );
    
    this.recipeUpdateSubscription=this.recipeService.recipeUpdateBroadcast.subscribe((recipe:Recipe)=>{
      for(var i=0;i<this.recipes.length;i++){
        if(this.recipes[i].id===recipe.id){
          this.recipes[i]=recipe;
          break;
        }
      }
    });

    this.recipesUpdateSubscription=this.recipeService.recipesUpdateBroadcast.subscribe((recipes:Recipe[])=>{
      this.recipes=recipes;
    });
  }
  
  ngOnDestroy(){
    this.recipeUpdateSubscription.unsubscribe();
    this.recipesUpdateSubscription.unsubscribe();
  }
}
