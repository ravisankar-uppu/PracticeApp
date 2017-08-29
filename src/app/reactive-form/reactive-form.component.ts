import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/Forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signupForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm=new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required])
      }),      
      'secret':new FormControl('pet')
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

}
