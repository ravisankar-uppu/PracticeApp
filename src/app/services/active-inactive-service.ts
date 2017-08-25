import {Injectable} from '@angular/core';
import {User} from '../models/user-model';
import {CounterService} from '../services/counter-service';

@Injectable()
export class ActivateInactivateUser{
    activeUsers:User[]=[{id:1,name:'Ravi',active:true},{id:2,name:'Prabhat',active:true},{id:3,name:'Nithin',active:true}];
    inactiveUsers:User[]=[];
    
    constructor(private counterService:CounterService){

    }

    inActivateUser(i:number){
        this.activeUsers[i].active=false;
        this.inactiveUsers.push(this.activeUsers[i]);
        this.activeUsers.splice(i,1);     
        this.counterService.setActiveToInactive();   
    }

    activateUser(index:number){
        this.inactiveUsers[index].active=true;
        this.activeUsers.push(this.inactiveUsers[index]);
        this.inactiveUsers.splice(index,1); 
        this.counterService.setInActiveToActive();
    }
}