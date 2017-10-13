
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './Header/header.component';
import { CounterService } from './services/counter-service';
import {ShoppingListService} from './shopping-list/shoppingList-service';
import {Routes,RouterModule} from '@angular/router';
import { NoComponentComponent } from './no-component/no-component.component';
import {AppRoutingModule} from './app.routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import {RecipeService} from './recipes/recipe-service';
import { DataLayer } from './data-layer';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthenticationService} from './auth/auth-service';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import {RecipesModule} from './recipes/recipes.module';
import { UserResolver } from './users/user-resolver.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { UserService } from './services/user-service';
import {StoreModule} from '@ngrx/store';
import { reducers } from './store/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoComponentComponent,
    ErrorPageComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'practice-app'}),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
  CounterService,
  //ShoppingListService,
  UserService,
  CanDeactivateGuard,
  AuthGuardService,
  AuthService,
  UserResolver,
  //RecipeService,
  //DataLayer,
  AuthenticationService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
