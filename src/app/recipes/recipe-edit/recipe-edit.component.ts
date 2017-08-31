import { Component, OnInit,OnDestroy } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {FormGroup,FormControl,FormArray,Validators} from '@angular/forms';
import {RecipeService} from '../recipe-service';
import {Recipe} from '../recipe.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit,OnDestroy {
  id:number;
  editMode:boolean=false;
  recipeForm:FormGroup;
  recipe:Recipe;
  recipeUpdateSubscription:Subscription;
 
  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id']!=null;
      this.InitForm();
    });

    this.recipeUpdateSubscription=this.recipeService.recipeUpdateBroadcast.subscribe((recipe:Recipe)=>{
      this.recipe=recipe;
      this.InitForm();
    });
  }

  private InitForm(){
    let id=0;
    let name='';
    let imagePath='';
    let description='';
    let ingredients=new FormArray([]);

    if(this.editMode){
      this.recipe=this.recipeService.getRecipeById(this.id);
      id=this.id;
      name=this.recipe.name;
      imagePath=this.recipe.imagePath;
      description=this.recipe.description;
      if(this.recipe['ingredients']){
        for(let ingredient of this.recipe.ingredients){
          ingredients.push(new FormGroup({
            'Name':new FormControl(ingredient.Name,Validators.required),
            'Amount':new FormControl(ingredient.Amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }

    this.recipeForm=new FormGroup({
      'id':new FormControl(id),
      'name':new FormControl(name,Validators.required),
      'imagePath':new FormControl(imagePath,Validators.required),
      'description':new FormControl(description),
      'ingredients':ingredients
    });
  }

  onSubmit(){
    if(this.editMode)
      this.recipeService.updateRecipeDetails(this.recipeForm.value);
    else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.cancel();  
  }

  cancel(){
    if(this.editMode)    
      this.router.navigate(['recipes',this.id]);    
    else
      this.router.navigate(['../',{relativeTo:this.route}]);
  }

  addIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'Name':new FormControl(null,[Validators.required]),
      'Amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  deleteIngredient(ingredientIndex:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(ingredientIndex);    
  }

  ngOnDestroy(){
    this.recipeUpdateSubscription.unsubscribe();
  }

}
