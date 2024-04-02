import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/admin/products.service';
import { HomeGetDataService } from 'src/app/services/client/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  constructor( private shop :HomeGetDataService,private product: HomeGetDataService, private image: ProductsService){ }
  productall: any[]=[];
  category: any[]=[];
  brands: any[]=[];
  carts: any = this.shop.getcarts();
  p: number=1;
  pageSize: number = 10;
  productImage : string= '';




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

    Swal.fire({
      icon: 'success',
      title: 'Thêm vào giỏ hàng thành công!',
      showConfirmButton: false,
      timer: 1500 // Tắt thông báo sau 1.5 giây
    });
  }
  // 
  filterProductsByPrice(event: any) {
    const selectedPrice = event.target.value;
    if (selectedPrice === '10-50') {

        this.shop.getproductall().subscribe((res: any[]) => {
            this.productall = res.filter(product => product.price >= 10 && product.price <= 50);
        });
    } 
    else if(selectedPrice === '60-100'){
      this.shop.getproductall().subscribe((res: any[]) => {
          this.productall = res.filter(product => product.price >= 60 && product.price <= 100);
      });
    } 
  } 

}
