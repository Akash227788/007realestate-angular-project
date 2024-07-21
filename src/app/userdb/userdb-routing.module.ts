import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdbComponent } from './userdb.component';

const routes: Routes = [{ path: '', component: UserdbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdbRoutingModule { }
