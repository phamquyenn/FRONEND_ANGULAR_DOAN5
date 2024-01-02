import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/admin/brand.service';
import { HomeGetDataService } from 'src/app/services/client/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brand-admin',
  templateUrl: './brand-admin.component.html',
  styleUrls: ['./brand-admin.component.css']
})
export class BrandAdminComponent implements OnInit {
  
  Title:any;
  p: number=1;
  brands: any[] = []; 
  pageSize: number = 10;

  constructor(private brand:BrandService){}

  ngOnInit(): void {
    this.Title=" Danh sách thương hiệu";
    this.brandview();
  }

  brandview(){
    this.brand.getbrand().subscribe((res: any)=>{
      
      this.brands = res;

    });
  }
  onDelete(id: number) {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Đồng ý"
        this.brand.deletebrand(id).subscribe(res => {
          this.brandview();
        });
      } else {
        // User clicked "Hủy" or closed the dialog
        console.log('Xóa sản phẩm đã bị hủy bởi người dùng.');
      }
    });
  }


}
