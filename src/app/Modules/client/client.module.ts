import {NgModule} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ClientRoutingModule } from './client-routing.module';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClient } from '@angular/common/http';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
    declarations:[
    HomeComponent,
    ShopComponent,
    BlogComponent,
    CheckoutComponent,
    CartComponent,
    PageNotFoundComponent,
    ProductsListComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent

   
  ],
    imports:[
        ClientRoutingModule,
        CommonModule, 
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class ClientModule{}