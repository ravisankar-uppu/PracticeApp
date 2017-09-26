import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/Forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-reactive-form-assignment',
  templateUrl: './reactive-form-assignment.component.html',
  styleUrls: ['./reactive-form-assignment.component.css']
})
export class ReactiveFormAssignmentComponent implements OnInit {
  projectStatuses=['Stable','Critical','Finished'];
  emailRegex='^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  forbiddenProjectNames=['Test'];

  projectForm:FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.projectForm=new FormGroup({
      'projectName':new FormControl(null,[Validators.required],[this.checkForbiddenProjectNamesAsync.bind(this)]),
      'email':new FormControl(null,[Validators.required,Validators.pattern(this.emailRegex)]),
      'projectStatuses':new FormControl('Critical')
    });
  }

  onSubmit(projectForm:FormGroup){
    console.log(projectForm);
  }

  checkForbiddenProjectNames(control:FormControl):{[s:string]:boolean}{
    if(this.forbiddenProjectNames.indexOf(control.value)!==-1){
      return {'invalidProjectName':true};
    }
    return null;
  }

  checkForbiddenProjectNamesAsync(control:FormControl):Promise<boolean> | Observable<boolean> | Promise<{}>{

    const promise=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(this.forbiddenProjectNames.indexOf(control.value)!==-1){
          resolve({'invalidProjectName':true});
        }
        else
        resolve(null);
      },1500);
    });

    return promise;
  }

}
