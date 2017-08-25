import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gaming-control',
  templateUrl: './gaming-control.component.html',
  styleUrls: ['./gaming-control.component.css']
})
export class GamingControlComponent implements OnInit {
  interval;
  counter:number=1;
  
  @Output() emitCounter=new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.interval=setInterval(()=>{
      this.emitCounter.emit(this.counter);
      console.log(this.counter);
      this.counter++;
    },500);
  }

  pauseGame(){
    clearInterval(this.interval);
  }
}