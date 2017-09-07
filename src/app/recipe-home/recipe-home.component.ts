import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.css']
})
export class RecipeHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateTo(page:string){
    switch(page){
      case 'recipes': this.router.navigate(['/recipes']);
        break;
      case 'shoppinglist' : this.router.navigate(['/shopping-list']);       
        break; 
      default: this.router.navigate(['/signin']);
        break;
    }
  }

}
