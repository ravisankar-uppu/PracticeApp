import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  inputText:string='Ravi';
  strings=['Ravi','Prabhat','Nithin'];
  constructor() { 
  }

  ngOnInit() {
    this.inputText='Ravi';
  }

}
