import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/Forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent{
  //@ViewChild('signupForm') signupForm:NgForm;

  securityDefault:string='pet';
  securityanswer:string='';
  genders=['male','female','other'];
  superUser:string='SuperUser';
  submitted:boolean=false;

  user={
      name:'',
      email:'',
      secret:'',
      securityanswer:'',
      gender:''
    };

  constructor() { }
 
  onSubmit(form:NgForm){
    console.log(form);
    // this.user.name=this.signupForm.form.value.userData.username;
    // this.user.email=this.signupForm.form.value.userData.email;
    // this.user.secret=this.signupForm.form.value.secret;
    // this.user.securityanswer=this.signupForm.form.value.securityanswer;
    // this.user.gender=this.signupForm.form.value.gender;
    // this.submitted=true;
    // this.signupForm.reset();
  }

  importUser(){
    // this.signupForm.setValue({
    //   userData:{
    //     username:'Ravi',
    //     email:'ravisankar426@gmail.com'
    //   },
    //   secret:'pet',
    //   securityanswer:'mothi',
    //   gender:'male'
    // });

    // this.signupForm.form.patchValue({
    //   userData:{
    //     username:'Ravi',
    //     email:'ravisankar426@gmail.com'
    //   },
    //   secret:'pet',
    //   securityanswer:'mothi',
    //   gender:'male'
    // });
  }

}