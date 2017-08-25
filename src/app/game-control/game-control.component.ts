import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  runCounter:boolean=true;
  counter:number=1;
  @Output() emitCounter=new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startCounter(){    
    this.runCounter=true;
      setTimeout(()=>{
          this.counter=this.counter+1;
      if(this.runCounter)
        this.startCounter();
      },500);
      this.emitCounter.emit(this.counter);
  }

  stopCounter(){
    this.runCounter=false;
  }

}
