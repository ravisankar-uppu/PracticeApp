import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../auth-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.authService.signUp(email,password);
    this.router.navigate(['/recipes']);
  }
}
