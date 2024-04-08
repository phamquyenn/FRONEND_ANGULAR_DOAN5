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
import { MatDialogModule } from '@angular/material/dialog';
import { AuthGuardService } from './services/admin/auth-gaurd.service';
import { CarouselModule } from 'ngx-owl-carousel-o';






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
    MatDialogModule,
    HttpClientModule,
    CarouselModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
