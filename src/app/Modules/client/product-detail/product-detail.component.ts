import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeGetDataService } from 'src/app/services/client/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  id: any;
  productdetails: any;
  carts: any = this.dataService.getcarts();


  constructor(private dataService:HomeGetDataService, private active: ActivatedRoute,private product: HomeGetDataService){}

  ngOnInit(){
    this.id = this.active.paramMap.subscribe((query: any ) =>{
      this.id =query.get('id');

      this.dataService.getProductById(this.id).subscribe((res: any)=>{
        this.productdetails =res[0];
        console.log(this.productdetails)
      })


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
