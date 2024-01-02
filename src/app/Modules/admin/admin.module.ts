import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrandAdminComponent } from './brand-admin/brand-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { CategoryAdminComponent } from './category-admin/category-admin.component';
import { UpdateProductAdminComponent } from './update-product-admin/update-product-admin.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateBrandComponent } from './update-brand/update-brand.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';



@NgModule({
  declarations: [
    DashbroadComponent,
    ProductAdminComponent,
    AddProductComponent,
    BrandAdminComponent,
    BlogAdminComponent,
    CategoryAdminComponent,
    UpdateProductAdminComponent,
    UploadImageComponent,
    AddBrandComponent,
    AddBlogComponent,
    AddCategoryComponent,
    UpdateBrandComponent,
    UpdateBlogComponent,
    UpdateCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
