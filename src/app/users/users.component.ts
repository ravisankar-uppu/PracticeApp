import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user-model';
import {UserService} from '../services/user-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[]=[];
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
    this.users=this.userService.getUsers();
  }

  showUser(id:number,name:string){
    this.router.navigate(['users',id,name]);
  }

}
