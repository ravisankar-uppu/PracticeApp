import {Injectable} from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class AuthenticationService{
    private token:string='';
    signUp(email:string,password:string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(error=>console.log(error));
    }

    signIn(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(response=>{
            console.log(response);
            firebase.auth().currentUser.getToken()
            .then(tkn=>this.token=tkn);
        })
        .catch(error=>console.log(error));
    }

    getToken(){
        firebase.auth().currentUser.getToken()
        .then(tkn=>this.token=tkn);

        return this.token;
    }
}