import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/services/admin/brand.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent implements OnInit{
  Title: any;
  file: any | null = null;
  preview: any | null = null;
  id: string | null = null;

  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private update: BrandService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
    this.profileForm = this.fb.group({
      Brand_id: [''],
      name: [''],
      address: [''],
      phone: [''],
      email: [''],
      brand_image: [''],

    });
  }

  ngOnInit(): void {
    this.Title = 'Sửa Thương Hiệu';

    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');

      if (this.id) {
        this.Title = 'Cập Nhật thương hiệu';

        // Lấy thông tin sản phẩm và hiển thị hình ảnh
        this.update.getonceBrand(this.id).subscribe((res) => {
          const Upro = res[0];
          this.getImageUrl(Upro.product_image);

          // Đặt giá trị cho form
          this.profileForm.patchValue(Upro);
        });
      } else {
        this.Title = 'Thêm Thương Hiệu Mới';
      }
    });
  }
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.preview = e.target.result;
      };
    }
  }

  getImageUrl(productImage: string): void {
    this.update.getImageUrl(productImage).subscribe(
      (imageUrl) => {
        this.preview = imageUrl;
      },
      (error) => {
        console.error('Error getting image URL:', error);
      }
    );
  }
  onSubmit(){
    if (!this.id) {
      console.error('Product ID is not available.');
      return;
    }

    const brandData = this.profileForm.value;
    const formData = new FormData();
    for (const key in brandData) {
      formData.append(key, brandData[key]);
    }
    formData.append('brand_image', this.file);

    this.update.updateBrand(this.id, formData).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          // Hiển thị SweetAlert thành công
          Swal.fire({
            icon: 'success',
            title: 'Sửa thành công',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.router.navigate(['admin/brand-admin']);
          });
        } else {
          // Hiển thị SweetAlert lỗi
          Swal.fire({
            icon: 'error',
            title: 'Lỗi',
            text: 'Đã xảy ra lỗi khi cập nhật sản phẩm.',
          });
        }
      },
      (error) => {
        console.error('Lỗi khi cập nhật sản phẩm:', error);
    
        // Hiển thị SweetAlert lỗi
        Swal.fire({
          icon: 'error',
          title: 'Lỗi',
          text: 'Đã xảy ra lỗi khi cập nhật sản phẩm.',
        });
      }
    );
  }

}
