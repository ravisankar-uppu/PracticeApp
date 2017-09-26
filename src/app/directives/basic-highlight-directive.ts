import {Directive,ElementRef,OnInit,Renderer,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
    selector:'[basicHighlightDirective]'
})
export class BasicHighlightDirective implements OnInit{

    @Input() defaultColor:string='transparent';
    @Input() highlightColor:string='yellow';
    @Input() mouseLeaveColor:string='cyan';

    @HostBinding('style.backgroundColor') backgroundColor:string='transparent';

    constructor(private elementRef:ElementRef, private renderer:Renderer){

    }

    ngOnInit(){
        //this.elementRef.nativeElement.style.color='Red';
        //this.renderer.setElementStyle(this.elementRef.nativeElement,'color','Black');
        this.backgroundColor=this.defaultColor;
    }

     @HostListener('click') paraClick(){
        //this.renderer.setElementStyle(this.elementRef.nativeElement,'color','white');
        this.backgroundColor='black';
    }

    @HostListener('mouseenter') mouseenter(){
        //this.renderer.setElementStyle(this.elementRef.nativeElement,'color','Red');
        this.backgroundColor=this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(){
        //this.renderer.setElementStyle(this.elementRef.nativeElement,'color','blue');
        this.backgroundColor=this.mouseLeaveColor;
    }
}