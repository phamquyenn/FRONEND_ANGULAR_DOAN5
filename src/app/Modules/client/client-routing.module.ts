import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashbroadComponent } from '../admin/dashbroad/dashbroad.component';
import { HomeGetDataService } from 'src/app/services/client/product.service';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuardService } from 'src/app/services/admin/auth-gaurd.service';
import { PaymentComponent } from './payment/payment.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent,
    title:'client-Home'
  },
  {
    path:'shop',
    component:ShopComponent,
    title:'client-Shop'
  },
  {
    path:'blog',
    component:BlogComponent,
    title:'client-Blog'
  },
  {
    path:'checkout',
    component:CheckoutComponent,
    title:'client-Checkout'
  },
  {
    path:'cart',
    component:CartComponent,
    title:'client-Cart'
  },
  {
    path:'page-not-found',
    component:PageNotFoundComponent,
    title:'client-Page-not-found'
  },
  {
    path:'categories/:id',
    component:ProductsListComponent,
    title:'GetProductsByCategories'
  },
  {
    path:'productDetail/:id',
    component:ProductDetailComponent,
    title:'client-Detail'
  },
  {
    path:'productDetail',
    component:ProductDetailComponent,
    title:'client-Detail'
  },
  {
    path:'login',
    component:LoginComponent,
    title:'client-login'
  },
  {
    path:'register',
    component:RegisterComponent,
    title:'client-register'
  },
  {
    path:'account',
    component:AccountComponent,
    title:'Account'
  },
  
  {
    path:'contact',
    component:ContactComponent,
    title:'Contact'
  },
  {
    path:'payment',
    component:PaymentComponent,
    title:'payment'
  },
  {
    path:'favorites',
    component:FavoritesComponent,
    title:'Product_favorites'
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
