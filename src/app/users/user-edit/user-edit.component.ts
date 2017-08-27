import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Router,ActivatedRoute,Params,Data} from '@angular/router';
import {User} from '../../models/user-model';
import {UserService} from '../../services/user-service';
import {CanComponentDeactivate} from '../../can-deactivate-guard.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit,CanComponentDeactivate {
  id:number=0;
  saved:boolean=false;
  cancel:boolean=false;
  user:User;
  @ViewChild('id') userId:ElementRef;
  @ViewChild('name') userName:ElementRef;
  constructor(private router:Router,private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    // this.route.params.subscribe((params:Params)=>{
    //   this.id=params['id'];
    // });
    // this.user=this.userService.getUserById(this.id);
    this.route.data.subscribe((data:Data)=>{
      this.user=data['user'];
    });
  }

  UpdateUser(){
    this.user.id=this.userId.nativeElement.value;
    this.user.name=this.userName.nativeElement.value;
    this.userService.updateUser(this.user);
    this.saved=true;
    this.router.navigate(['/users',this.user.id,this.user.name]);
  }

  canDeactivate():Observable<boolean> | Promise<boolean> | boolean{
    if(!this.saved && !this.cancel){
      return confirm('Are you sure you want to leave this page ?');
    }
    else
      return true;
  }

  Cancel(){
    this.cancel=true;
    this.router.navigate(['/users',this.user.id,this.user.name]);
  }

}
