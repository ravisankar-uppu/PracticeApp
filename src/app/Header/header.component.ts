
import { Store } from '@ngrx/store';
import {Component,Output,EventEmitter,OnInit,OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {RecipeService} from '../recipes/recipe-service';
import {DataLayer} from '../data-layer';
import {AuthenticationService} from '../auth/auth-service';
import {Subscription} from 'rxjs';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducer';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../store/app.reducers';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent implements OnInit,OnDestroy{
    
    tokenAvailable:boolean=false;
    tokenSubscription=new Subscription();
    authState:Observable<fromAuth.State>;

    ngOnInit(){
        this.authState=this.store.select('auth');
        // console.log('Auth State');
        // console.log(this.authState);
        // this.tokenSubscription=this.authService.tokenBroadcast.subscribe((token:string)=>{
        //         this.tokenAvailable = token!=null;
        // });
        // console.log(this.tokenAvailable);
    }

    constructor(private router:Router,
        private recipeService:RecipeService,
        private dataLayer:DataLayer,
        private authService:AuthenticationService,
        private store:Store<fromApp.AppState>){

    }
    fetchData(){
        this.router.navigate(['recipes']);
    }

    saveData(){
        this.dataLayer.saveData(this.recipeService.getRecipes());
        this.router.navigate(['recipes']);
    }

    signOut(){
        this.authService.signOut();
        this.router.navigate(['/']);
    }

    ngOnDestroy(){
        //this.tokenSubscription.unsubscribe();
    }
}