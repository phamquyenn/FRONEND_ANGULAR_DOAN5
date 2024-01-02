import { Component } from '@angular/core';
import { HomeGetDataService } from 'src/app/services/client/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private product: HomeGetDataService) { }
  products: any[] = [];
  brand: any[] = [];
  blog: any[] = [];
  bestsale : any[] = [];
  carts: any = this.product.getcarts();

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
      // console.log(res)
    })
  }

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

    if (confirm('Thêm vào giỏ hàng thành công')) {
      console.log('Lưu bảng thành công!');
    }
  }
}
