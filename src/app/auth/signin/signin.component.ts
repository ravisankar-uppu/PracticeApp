import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store:Store<fromApp.AppState>,private router:Router) { }

  ngOnInit() {

  }

  onSubmit(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    //this.authService.signIn(email,password);
    this.store.dispatch(new AuthActions.TrySignIn({username:email,password:password}));
    this.router.navigate(['/recipe-home']);
  }

}
