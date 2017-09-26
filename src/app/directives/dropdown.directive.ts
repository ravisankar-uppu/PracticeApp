import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') dropdownToggle = false;   

  constructor() { 

  }

  @HostListener('click') clickDropdown(){
    this.dropdownToggle=!this.dropdownToggle;
      //this.renderer.setElementClass(this.elementRef.nativeElement,'open',this.dropdownToggle);
  }

}
