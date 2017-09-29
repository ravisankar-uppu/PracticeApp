
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { DropdownDirective } from './../directives/dropdown.directive';

@NgModule({
    declarations:[
        DropdownDirective
    ],
    exports:[
        CommonModule,   
        DropdownDirective
    ]
})

export class SharedModule{

}

export const ADD_INGREDIENT='ADD_INGREDIENT';