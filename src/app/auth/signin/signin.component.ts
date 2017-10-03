import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../auth-service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.authService.signIn(email,password);
    this.router.navigate(['/recipe-home']);
  }

}
