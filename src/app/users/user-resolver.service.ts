import {ActivatedRouteSnapshot,Resolve,RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {UserService} from '../services/user-service';

interface user{
    id:number;
    name:string;
    active:boolean;
}


@Injectable()
export class UserResolver implements Resolve<user>{
    constructor(private userService:UserService){

    }
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):
    Observable<user> | Promise<user> | user{
        return this.userService.getUserById(+route.params['id'])
    }
}
