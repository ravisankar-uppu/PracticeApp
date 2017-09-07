import { Component,OnInit } from '@angular/core';
import {ActivateInactivateUser} from './services/active-inactive-service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./mystyles.css'],
  providers:[ActivateInactivateUser]
})
export class AppComponent implements OnInit {
  constructor(){
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyD10JOJLK5pakzPsYHmEaqAbg4TgTWILB0",
      authDomain: "practiceapp-e47f8.firebaseapp.com"
    });
  }
}
