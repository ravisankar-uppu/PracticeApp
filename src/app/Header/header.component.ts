import {Component,OnInit,OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {RecipeService} from '../recipes/recipe-service';
import {DataLayer} from '../data-layer';
import {AuthenticationService} from '../auth/auth-service';
import {Subscription} from 'rxjs';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent implements OnInit,OnDestroy{
    
    tokenAvailable:boolean=false;
    tokenSubscription=new Subscription();

    ngOnInit(){
        this.tokenSubscription=this.authService.tokenBroadcast.subscribe((token:string)=>{
                this.tokenAvailable = token!=null;
        });
        console.log(this.tokenAvailable);
    }

    constructor(private router:Router,
        private recipeService:RecipeService,
        private dataLayer:DataLayer,
        private authService:AuthenticationService){

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
        this.tokenSubscription.unsubscribe();
    }
}