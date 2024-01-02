import { Component, OnInit } from '@angular/core';
import { HomeGetDataService } from 'src/app/services/client/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  constructor( private shop :HomeGetDataService,private product: HomeGetDataService){ }
  productall: any[]=[];
  category: any[]=[];
  brands: any[]=[];
  carts: any = this.shop.getcarts();
  p: number=1;
  pageSize: number = 10;




  ngOnInit(){
    this.shop.getproductall().subscribe(res=>{
      
      this.productall =res;
      console.log(this.productall)
    })
    this.shop.getcategories().subscribe(res=>{
      
      this.category =res;
      
    })
    this.shop.getbrand().subscribe(res=>{
      
      this.brands =res;
      console.log(this.brands)
      
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
