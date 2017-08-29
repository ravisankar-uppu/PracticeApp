import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/Forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signupForm:FormGroup;
  emailRegex='^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  genders=['male','female'];
  submitted=false;
  forbiddenUsernames=['ravisankar426'];
  user={username:'',email:'',secret:'',gender:'',hobbies:[]};

  constructor() { }

  ngOnInit() {
    this.signupForm=new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null,[Validators.required],this.checkForbiddenUserNamesAsync.bind(this)),
      'email':new FormControl(null,[Validators.required,Validators.pattern(this.emailRegex)])
      }),      
      'secret':new FormControl('pet'),
      'gender':new FormControl('male'),
      'hobbies':new FormArray([])
    });
  }

  onSubmit(){
    var hobbyControls=(<FormArray>this.signupForm.get('hobbies')).controls;
     this.user.username=(<FormControl>this.signupForm.get('userData.username')).value;
     this.user.email=(<FormControl>this.signupForm.get('userData.email')).value;
     this.user.secret=(<FormControl>this.signupForm.get('secret')).value;
     this.user.gender=(<FormControl>this.signupForm.get('gender')).value;
     for(var i=0;i<hobbyControls.length;i++){
      if(this.user.hobbies[i]!=null){
        this.user.hobbies[i]=hobbyControls[i].value;
      }
      else{
        this.user.hobbies.push(hobbyControls[i].value);
      }
     }
     this.submitted=true;   
     console.log(this.signupForm.errors);  
  }

  AddHobby(){
    const hobby=new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(hobby);
  }

  RemoveHobby(index:number){
    (<FormArray>this.signupForm.get('hobbies')).removeAt(index);
    this.user.hobbies.splice(index,1);
    console.log(this.user.hobbies);
  }

  checkForbiddenUserNames(control:FormControl):{[s:string]:boolean} {
    if(this.forbiddenUsernames.indexOf(control.value)!==-1){
      return {'alreadyused':true};
    }
    else
      return null;
  }

  checkForbiddenUserNamesAsync(control:FormControl):Promise<any> | Observable<any> {
    const promise=new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{        
        if(this.forbiddenUsernames.indexOf(control.value)!==-1){
          resolve({'alreadyused':true});
        }
        else{
          resolve(null);
        }
      },1500);


    });

   return promise;
  }

}
