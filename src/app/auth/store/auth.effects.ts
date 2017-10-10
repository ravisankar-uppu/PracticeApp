import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import {fromPromise} from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';


@Injectable()
export class AuthEffects{
    @Effect()
    authSignup=this.actions$
    .ofType(AuthActions.TRY_SIGNUP)
    .map((action:AuthActions.TrySignUp)=>{
        return action.payload;
    })
    .switchMap((authData:{username:string,password:string})=>{
        return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username,authData.password));
    })
    .switchMap(()=>{
        return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token:string)=>{
        return[
            {
                type:AuthActions.SIGN_IN
            },
            {
                type:AuthActions.SET_TOKEN,
                payload:token
            }
        ]
    });

    @Effect()
    authSignIn=this.actions$
    .ofType(AuthActions.TRY_SIGNIN )
    .map((action:AuthActions.TrySignIn)=>{
        return action.payload
    })
    .switchMap((authData:{username:string,password:string})=>{
        return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username,authData.password));
    })
    .switchMap(()=>{
        return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token:string)=>{
        return[
            {
                type:AuthActions.SIGN_IN
            },
            {
                type:AuthActions.SET_TOKEN,
                payload:token
            }
        ]
    });

    @Effect({dispatch:false})
    authSignOut=this.actions$
    .ofType(AuthActions.TRY_SIGNOUT)
    .map((response)=>{ 
        return firebase.auth().signOut()
        .then((response)=>{
            this.store.dispatch(new AuthActions.SignOut());
        });
    })
    .do(()=>{        
        this.router.navigate(['/']);
    });

    constructor(private actions$:Actions,private store:Store<fromApp.AppState>,private router:Router){

    }
}