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
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {AuthGuardService} from './auth-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {UserResolver} from './users/user-resolver.service';
import {RecipeResolver} from './recipes/recipe-resolver.service';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {InputFormComponent} from './input-form/input-form.component';
import {RoutingHeaderComponent} from './routing-header/routing-header.component';
import {TemplateDrivenFormAssignmentComponent} from './template-driven-form-assignment/template-driven-form-assignment.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {ReactiveFormAssignmentComponent} from './reactive-form-assignment/reactive-form-assignment.component';
import {PipesComponent} from './pipes/pipes.component';

const appRoutes:Routes=[
  {path:'recipes',component:RecipesComponent,
  children:[
    {path:'',component:RecipeStartComponent},
    {path:'new',component:RecipeEditComponent},
    {path:':id',component:RecipeDetailComponent},
    {path:':id/edit',component:RecipeEditComponent}
  ]
},
  {path:'shopping-list',component:ShoppingListComponent},
  {path:'servers',component:ServersComponent},  
  {path:'users',component:UsersComponent,
  canActivate:[AuthGuardService],
  canActivateChild:[AuthGuardService],
  children:[
    {path:':id/:name',component:UserComponent},
    {
      path:':id',
      component:UserEditComponent,
      canDeactivate:[CanDeactivateGuard],
      resolve:{user:UserResolver}
    }
  ]
},
  {path:'no-component',component:NoComponentComponent},
  {path:'error',component:ErrorPageComponent,data:{message:'This is the error page..!!!'}},
  {path:'routing-header',component:RoutingHeaderComponent},
  {path:'input-form',component:InputFormComponent},
  {path:'assignment-form',component:TemplateDrivenFormAssignmentComponent},
  {path:'reactive-form',component:ReactiveFormComponent},
  {path:'reactive-form-assignment',component:ReactiveFormAssignmentComponent},
  {path:'pipes',component:PipesComponent},
  {path:'',redirectTo:'/recipes',pathMatch:'full'}
  //{path:'',redirectTo:'/pipes',pathMatch:'full'},
  //{path:'**',redirectTo:'/no-component'}
];

@NgModule({
imports:[
    RouterModule.forRoot(appRoutes,{useHash:true})
],
exports:[RouterModule]
})

export class AppRoutingModule{
    
}