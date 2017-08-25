import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './Header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingDetailComponent } from './shopping-list/shopping-detail/shopping-detail.component';
import { ReferenceInputComponent } from './reference-input/reference-input.component';
import { GamingControlComponent } from './gaming-control/gaming-control.component';
import { BasicHighlightDirective } from './directives/basic-highlight-directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterService } from './services/counter-service';
import {ShoppingListService} from './shopping-list/shoppingList-service';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserService } from './services/user-service';
import { NoComponentComponent } from './no-component/no-component.component';
import {AppRoutingModule} from './app.routing.module'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingDetailComponent,
    ReferenceInputComponent,
    GamingControlComponent,
    BasicHighlightDirective,
    DropdownDirective,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    UserEditComponent,
    NoComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CounterService,ShoppingListService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
