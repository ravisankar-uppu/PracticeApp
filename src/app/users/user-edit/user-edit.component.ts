import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {User} from '../../models/user-model';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id:number=0;
  user:User;
  @ViewChild('id') userId:ElementRef;
  @ViewChild('name') userName:ElementRef;
  constructor(private router:Router,private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=params['id'];
    });
    this.user=this.userService.getUserById(this.id);
  }

  UpdateUser(){
    this.user.id=this.userId.nativeElement.value;
    this.user.name=this.userName.nativeElement.value;
    this.userService.updateUser(this.user);
    this.router.navigate(['/users',this.user.id,this.user.name]);
  }

}
