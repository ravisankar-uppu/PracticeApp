import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-reference-input',
  templateUrl: './reference-input.component.html',
  styleUrls: ['./reference-input.component.css']
})
export class ReferenceInputComponent implements OnInit {

  @ViewChild('userName') userName:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  Submit(nameInput: HTMLInputElement){
    console.log(this.userName.nativeElement.value);
  }

}
