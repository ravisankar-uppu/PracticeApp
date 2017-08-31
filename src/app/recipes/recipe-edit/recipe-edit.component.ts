import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {FormGroup,FormControl,FormArray} from '@angular/forms';
import {RecipeService} from '../recipe-service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit {
  id:number;
  editMode:boolean=false;
  recipeForm:FormGroup;
  recipe:Recipe;

  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id']!=null;
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
            'Name':new FormControl(ingredient.Name),
            'Amount':new FormControl(ingredient.Amount)
          }));
        }
      }
    }

    this.recipeForm=new FormGroup({
      'id':new FormControl(id),
      'name':new FormControl(name),
      'imagePath':new FormControl(imagePath),
      'description':new FormControl(description),
      'ingredients':ingredients
    });
  }

  onSubmit(){
    this.recipeService.updateRecipeDetails(this.recipeForm.value);
    this.cancel();  
  }

  cancel(){    
    this.router.navigate(['recipes',this.id]);    
  }

}
