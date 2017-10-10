
import { Store } from '@ngrx/store';
import {CanActivate,
    ActivatedRouteSnapshot,
RouterStateSnapshot,
CanActivateChild,
Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import * as fromApp from './store/app.reducers';
import * as fromAuth from './auth/store/auth.reducer';

@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild{
    

    constructor(private store:Store<fromApp.AppState>,private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
        return this.store.select('auth')
        .take(1)
        .map((authState:fromAuth.State)=>{
            if(authState.authenticated){
                return true;
            }
            else
                this.router.navigate(['/']);
        });
    }

    canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(route,state);
    }
}