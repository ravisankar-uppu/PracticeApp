import {NgModule} from '@angular/core'
import {Router,Routes,RouterModule} from '@angular/router';


import { HomeComponent } from './home/home.component';
import { NoComponentComponent } from './no-component/no-component.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {RecipeHomeComponent} from './recipe-home/recipe-home.component';

const appRoutes:Routes=[  
  {path:'no-component',component:NoComponentComponent},
  {path:'error',component:ErrorPageComponent,data:{message:'This is the error page..!!!'}}, 
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'recipe-home',component:RecipeHomeComponent},
  //{path:'',redirectTo:'/recipes',pathMatch:'full'}
  {path:'',redirectTo:'/signin',pathMatch:'full'}
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