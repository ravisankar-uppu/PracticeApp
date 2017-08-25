import {Component,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    viewPage:string='Recipes';
    @Output() pageToShow=new EventEmitter<string>(); 

    showPage(page){
        this.viewPage=page;
        console.log(this.viewPage);
        this.pageToShow.emit(this.viewPage);
    }

}