import { PipesComponent } from './../pipes/pipes.component';
import { ReactiveFormAssignmentComponent } from './../reactive-form-assignment/reactive-form-assignment.component';
import { ReactiveFormComponent } from './../reactive-form/reactive-form.component';
import { TemplateDrivenFormAssignmentComponent } from './../template-driven-form-assignment/template-driven-form-assignment.component';
import { InputFormComponent } from './../input-form/input-form.component';
import { RoutingHeaderComponent } from './../routing-header/routing-header.component';
import { UserResolver } from './../users/user-resolver.service';
import { CanDeactivateGuard } from './../can-deactivate-guard.service';
import { UserEditComponent } from './../users/user-edit/user-edit.component';
import { UserComponent } from './../users/user/user.component';
import { AuthGuardService } from './../auth-guard.service';
import { UsersComponent } from './../users/users.component';
import { ServersComponent } from './../servers/servers.component';

import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const exercisesRoutes:Routes=[
    {path:'servers',component:ServersComponent},  
    {path:'users',component:UsersComponent,
    canActivate:[AuthGuardService],
    canActivateChild:[AuthGuardService],
    children:[
      {path:':id/:name',component:UserComponent},
      {
        path:':id',
        component:UserEditComponent,
        canDeactivate:[CanDeactivateGuard],
        resolve:{user:UserResolver}
      }
    ]
  },
  {path:'routing-header',component:RoutingHeaderComponent},
  {path:'input-form',component:InputFormComponent},
  {path:'assignment-form',component:TemplateDrivenFormAssignmentComponent},
  {path:'reactive-form',component:ReactiveFormComponent},
  {path:'reactive-form-assignment',component:ReactiveFormAssignmentComponent},
  {path:'pipes',component:PipesComponent}
];


@NgModule({
    imports:[
        RouterModule.forChild(exercisesRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class ExercisesRoutingModule{

}