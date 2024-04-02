import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/admin/products.service';
import { HomeGetDataService } from 'src/app/services/client/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private product: HomeGetDataService, private image: ProductsService) { }
  products: any[] = [];
  brand: any[] = [];
  blog: any[] = [];
  bestsale : any[] = [];
  carts: any = this.product.getcarts();

  productImage: string = '';

  ngOnInit() {
    this.product.getnew().subscribe(res => {
      this.products = res[0];
      
    });

    this.product.getbrand().subscribe(res => {
      this.brand = res;
    });

    this.product.getblog().subscribe(res => {
      this.blog = res;
    });
    this.product.getbestsale().subscribe(res =>{
      this.bestsale =res[0]
      
    })
  }
  // 
  loadProductImage(filename: any) {
    this.image.getProductImage(filename).subscribe(
      (response: any) => {
        this.productImage = response.filename;
        console.log(this.productImage)
      },
      (error) => {
        console.error('Lỗi khi lấy tên ảnh:', error);
      }
    );
  }

  getProductImageUrl(filename: string): string {
    return `http://localhost:3000/image/getproductimage/${filename}`;
    
  }
  // 
  onAddTocart(productdetails: any) {
    let idx = this.carts.findIndex((item: any) => item.id == productdetails.product_id);

    if (idx >= 0) {
      // Sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
      this.carts[idx].quantity += 1;
    } else {
      // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào giỏ hàng
      let cartItem: any = {
        id: productdetails.product_id,
        img: productdetails.product_image,
        name: productdetails.product_name,
        price: productdetails.price,
        quantity: 1,
        subtotal: function () {
          return this.price * this.quantity;
        }
      };
      this.carts.push(cartItem);
    }

    this.product.saveCart(this.carts);
    this.product.updateCartAndItemCount(this.carts);

    Swal.fire({
      icon: 'success',
      title: 'Thêm vào giỏ hàng thành công!',
      showConfirmButton: false,
      timer: 1500 // Tắt thông báo sau 1.5 giây
    });
  }
}
