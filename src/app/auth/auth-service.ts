import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import * as firebase from 'firebase';

@Injectable()
export class AuthenticationService{
    token:string='';
    tokenBroadcast=new Subject<string>();

    signUp(email:string,password:string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(error=>console.log(error));
    }

    signIn(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(response=>{
            firebase.auth().currentUser.getIdToken()
            .then(tkn=>{
                this.token=tkn
            });
            this.tokenBroadcast.next(this.token);
        })
        .catch(error=>console.log(error));
    }

    signOut(){
        firebase.auth().signOut()
        .then(response=>console.log('signed out'))
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