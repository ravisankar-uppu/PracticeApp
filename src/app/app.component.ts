import { Component } from '@angular/core';
import {ActivateInactivateUser} from './services/active-inactive-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./mystyles.css'],
  providers:[ActivateInactivateUser]
})
export class AppComponent {
  constructor(){
  }
}
