import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import * as firebase from 'firebase';
import * as fromAuth from './store/auth.reducer';
import * as AuthActions from './store/auth.actions';

@Injectable()
export class AuthenticationService{
    token:string='';
    tokenBroadcast=new Subject<string>();

    constructor(private store:Store<fromAuth.State>){

    }

    signUp(email:string,password:string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user=>{            
            this.store.dispatch(new AuthActions.SignUp());
        })
        .catch(error=>console.log(error));
    }

    signIn(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(response=>{
            firebase.auth().currentUser.getIdToken()
            .then(tkn=>{
                //this.token=tkn
                this.store.dispatch(new AuthActions.SignIn());
                this.store.dispatch(new AuthActions.SetToken(tkn));
            });
            //this.tokenBroadcast.next(this.token);
        })
        .catch(error=>console.log(error));
    }

    signOut(){
        firebase.auth().signOut()
        .then(response=>
                this.store.dispatch(new AuthActions.SignOut())
            )
        .catch(error=>console.log(error));
        this.tokenBroadcast.next(null);
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(tkn=>this.token=tkn);
        this.tokenBroadcast.next(this.token);
        return this.token;
    }
}