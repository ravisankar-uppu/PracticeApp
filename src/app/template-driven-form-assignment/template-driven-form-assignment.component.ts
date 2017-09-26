import { Component} from '@angular/core';
import {NgForm} from '@angular/Forms';

@Component({
  selector: 'app-template-driven-form-assignment',
  templateUrl: './template-driven-form-assignment.component.html',
  styleUrls: ['./template-driven-form-assignment.component.css']
})
export class TemplateDrivenFormAssignmentComponent {
  
  subscriptionDefault='basic';
  subscriptions=['basic','advanced','pro'];

  constructor() { }
  ngOnInit() {
  }

  onSubmit(){
    //console.log(this.templateDrivenForm);
  }
}
