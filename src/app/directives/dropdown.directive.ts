import { Directive,ElementRef,Input,OnInit,HostListener,Renderer,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  @HostBinding('class.open') dropdownToggle = false;   

  constructor(private elementRef:ElementRef,private renderer:Renderer) { 

  }
  ngOnInit(){
  }

  @HostListener('click') clickDropdown(eventDate: Event){
    this.dropdownToggle=!this.dropdownToggle;
      this.renderer.setElementClass(this.elementRef.nativeElement,'open',this.dropdownToggle);
  }

}
