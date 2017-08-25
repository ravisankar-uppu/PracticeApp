import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shoppingList-service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe:Recipe;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  AddToShoppingList(selectedRecipe:Recipe){
    this.shoppingListService.addShoppingListItems(selectedRecipe.ingredients);
  }
}
