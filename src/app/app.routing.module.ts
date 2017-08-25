import {NgModule} from '@angular/core'
import {Router,Routes,RouterModule} from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingDetailComponent } from './shopping-list/shopping-detail/shopping-detail.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserService } from './services/user-service';
import { NoComponentComponent } from './no-component/no-component.component';

const appRoutes:Routes=[
  {path:'recipes',component:RecipesComponent},
  {path:'shopping-list',component:ShoppingListComponent},
  {path:'',component:HomeComponent},
  {path:'servers',component:ServersComponent},  
  {path:'users',component:UsersComponent,children:[
    {path:':id/:name',component:UserComponent},
    {path:':id',component:UserEditComponent}
  ]},
  {path:'no-component',component:NoComponentComponent},
  {path:'**',redirectTo:'/no-component'}
];

@NgModule({
imports:[
    RouterModule.forRoot(appRoutes)
],
exports:[RouterModule]
})

export class AppRoutingModule{
    
}