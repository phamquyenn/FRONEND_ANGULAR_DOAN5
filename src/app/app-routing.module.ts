import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Modules/client/home/home.component';
import { DashbroadComponent } from './Modules/admin/dashbroad/dashbroad.component';
const routes: Routes = [

  { path: '', redirectTo: '/client/Home', pathMatch: 'full' },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
