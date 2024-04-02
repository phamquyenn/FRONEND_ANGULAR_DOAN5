import {NgModule} from '@angular/core';
import { LayoutClientComponent } from './layout-client/layout-client.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ClientRoutingModule } from 'src/app/Modules/client/client-routing.module';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { ClientModule } from 'src/app/Modules/client/client.module';
import { PartialModule } from '../partial/partial.module';


@NgModule({ 
    declarations:[
    LayoutClientComponent,
    LayoutAdminComponent
  ],
    imports:[
  
        CommonModule,
        RouterModule,
        BrowserModule,
        ClientRoutingModule,
        ClientModule,
       PartialModule

    ]
}) 
export class TemplateModule{}