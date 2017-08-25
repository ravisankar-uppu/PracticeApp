import { Component, OnInit } from '@angular/core';
import {ActivateInactivateUser} from '../services/active-inactive-service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  users:{name:string,active:boolean}[]=[];
  constructor(private activateInactivateService:ActivateInactivateUser) { }

  ngOnInit() {
    this.users=this.activateInactivateService.activeUsers;
  }

  inActivateUser(i:number){
    this.activateInactivateService.inActivateUser(i);
  }
}
