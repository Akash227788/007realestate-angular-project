import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdbRoutingModule } from './userdb-routing.module';
import { UserdbComponent } from './userdb.component';


@NgModule({
  declarations: [
    UserdbComponent
  ],
  imports: [
    CommonModule,
    UserdbRoutingModule
  ]
})
export class UserdbModule { }
