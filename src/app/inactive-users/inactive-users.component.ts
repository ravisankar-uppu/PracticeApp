import { Component, OnInit } from '@angular/core';
import {ActivateInactivateUser} from '../services/active-inactive-service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users:{name:string,active:boolean}[]=[];
  constructor(private activateInactivateService:ActivateInactivateUser) { }

  ngOnInit() {
    this.users=this.activateInactivateService.inactiveUsers;
  }

  activateUser(index){
    this.activateInactivateService.activateUser(index);
  }
}
