
import {Http,Response} from '@angular/http';
import {Common} from './common'
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class DataLayer{
    common:Common=new Common();
    constructor(private http:Http){

    }

    getRecipes(){
        return this.http.get(this.common.webAPIUrl)
        .map(
            (response:Response)=>{
            const data= response.json();
            return data;
            }
        ); 
    }
}