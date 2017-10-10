import {Action} from '@ngrx/store';
import * as AuthActions from './auth.actions';
import * as firebase from 'firebase';
import {fromPromise} from 'rxjs/observable/fromPromise';

export interface State{
    token:string;
    authenticated:boolean;
}

const initialState:State={
    token:null, 
    authenticated:null
};


export function authReducer(state=initialState,action:AuthActions.AuthActions){

    switch(action.type){
        case (AuthActions.SIGN_UP):
        case (AuthActions.SIGN_IN):
            return {
                ...state,
                authenticated:true
            };
        case (AuthActions.SIGN_OUT):
            return{
                ...state,
                token:null,
                authenticated:false
            };
        case (AuthActions.SET_TOKEN):
            return{
                ...state,
                token:action.payload,
                authenticated:true
            };
        default:
            return state;
    }
}