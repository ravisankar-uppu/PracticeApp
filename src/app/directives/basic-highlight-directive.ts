import {Directive,OnInit,HostListener,HostBinding} from '@angular/core';

@Directive({
    selector:'[basicHighlightDirective]'
})
export class BasicHighlightDirective implements OnInit{

    @HostBinding('style.backgroundColor') backgroundColor:string='transparent';

    constructor(){

    }

    ngOnInit(){
        //this.elementRef.nativeElement.style.color='Red';
        //this.renderer.setElementStyle(this.elementRef.nativeElement,'color','Black');
        this.backgroundColor='Black';
    }

     @HostListener('click') paraClick(){
        //this.renderer.setElementStyle(this.elementRef.nativeElement,'color','white');
        this.backgroundColor='black';
    }

    @HostListener('mouseenter') mouseenter(){
        //this.renderer.setElementStyle(this.elementRef.nativeElement,'color','Red');
        this.backgroundColor='Black';
    }

    @HostListener('mouseleave') mouseleave(){
        //this.renderer.setElementStyle(this.elementRef.nativeElement,'color','blue');
        this.backgroundColor='Black';
    }
}