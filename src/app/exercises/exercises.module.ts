
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CustomPipePipe } from './../custom-pipe.pipe';
import { PipesComponent } from './../pipes/pipes.component';
import { ReactiveFormAssignmentComponent } from './../reactive-form-assignment/reactive-form-assignment.component';
import { ReactiveFormComponent } from './../reactive-form/reactive-form.component';
import { TemplateDrivenFormAssignmentComponent } from './../template-driven-form-assignment/template-driven-form-assignment.component';
import { InputFormComponent } from './../input-form/input-form.component';
import { RoutingHeaderComponent } from './../routing-header/routing-header.component';
import { UserEditComponent } from './../users/user-edit/user-edit.component';
import { UserComponent } from './../users/user/user.component';
import { ServersComponent } from './../servers/servers.component';
import { UsersComponent } from './../users/users.component';
import { HomeComponent } from './../home/home.component';
import { InactiveUsersComponent } from './../inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './../active-users/active-users.component';
import { BasicHighlightDirective } from './../directives/basic-highlight-directive';
import { GamingControlComponent } from './../gaming-control/gaming-control.component';
import { ReferenceInputComponent } from './../reference-input/reference-input.component';
import { ExercisesRoutingModule } from './exercises-routing.module';

import {GameControlComponent} from '../game-control/game-control.component'
import {OddComponent} from '../odd/odd.component'
import {EvenComponent} from '../even/even.component'



@NgModule({
    declarations:[
        ReferenceInputComponent,
        GamingControlComponent,
        BasicHighlightDirective,
        ActiveUsersComponent,
        InactiveUsersComponent,
        HomeComponent,
        UsersComponent,
        ServersComponent,
        UserComponent,
        UserEditComponent,        
         RoutingHeaderComponent,
         InputFormComponent,
         TemplateDrivenFormAssignmentComponent,
         ReactiveFormComponent,
         ReactiveFormAssignmentComponent,
         PipesComponent,
         CustomPipePipe,
         GameControlComponent,
         OddComponent,
         EvenComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ExercisesRoutingModule
    ]
})
export class ExercisesModule{

}