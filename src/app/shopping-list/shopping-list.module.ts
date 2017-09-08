


import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ShoppingDetailComponent} from './shopping-detail/shopping-detail.component';
import {ShoppingListComponent} from './shopping-list.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

@NgModule({
    declarations:[        
        ShoppingListComponent,
        ShoppingDetailComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ShoppingListRoutingModule
    ]
})

export class ShoppingListModule{

}