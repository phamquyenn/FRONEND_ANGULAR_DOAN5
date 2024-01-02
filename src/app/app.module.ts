import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientModule } from './Modules/client/client.module';
import { TemplateRoutingModule } from './layout/template/template-routing.module';

import { DashbroadComponent } from './Modules/admin/dashbroad/dashbroad.component';
import { AdminModule } from './Modules/admin/admin.module';
import { TopbaComponent } from './layout/partial/admin/topba/topba.component';
import { TemplateModule } from './layout/template/template.module';
import { HttpClientModule } from '@angular/common/http';







@NgModule({
  declarations: [
    AppComponent,

  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    AdminModule,
    TemplateRoutingModule,
  HttpClientModule,


  

  
  
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
