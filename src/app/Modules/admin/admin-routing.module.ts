import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BrandAdminComponent } from './brand-admin/brand-admin.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { CategoryAdminComponent } from './category-admin/category-admin.component';
import { UpdateProductAdminComponent } from './update-product-admin/update-product-admin.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { UpdateBrandComponent } from './update-brand/update-brand.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

const routes: Routes = [

  {
    path:'dashbroad',
    component:DashbroadComponent
  },
  {
    path:'product-admin',
    component:ProductAdminComponent
  },
  {
    path:'product-add',
    component:AddProductComponent
  },
  {
    path:'brand-admin',
    component:BrandAdminComponent
  },
  {
    path:'blog-admin',
    component:BlogAdminComponent
  },
  {
    path:'category-admin',
    component:CategoryAdminComponent
  },

  {
    path:'product-update/:id',
    component:UpdateProductAdminComponent
  },
  
  {
    path:'UploadImage',
    component:UploadImageComponent
  },
  {
    path:'add-brand',
    component:AddBrandComponent
  },
  {
    path:'add-blog',
    component:AddBlogComponent
  },
  {
    path:'add-category',
    component:AddCategoryComponent
  },
  {
    path:'update-blog/:id',
    component:UpdateBlogComponent
  },
  {
    path:'update-brand/:id',
    component:UpdateBrandComponent
  },
  {
    path:'update-category/:id',
    component:UpdateCategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
