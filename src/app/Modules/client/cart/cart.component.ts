import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeGetDataService } from 'src/app/services/client/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: any = [];
// Lấy tổng số lương
  get totalQuantity(): number {
    return this.app.getCartToTalQuantity();
  }
// Tổng tiền của sản phẩm có trong giỏ hàng
  get totalPrice(): number {
    return this.app.getCartToTalPrice();
  }

  constructor(private app: HomeGetDataService,private router: Router) {}

  ngOnInit(): void {
    this.carts = this.app.getcarts();
  }

  subtotal(cart: any): number {
    return cart.quantity * cart.price;
  }

  updateQuantity(idx: number, ev: any) {
    let newQuantity = ev.target.value;
    newQuantity = newQuantity > 0 ? newQuantity : 1;
    newQuantity = newQuantity <= 100 ? newQuantity : 100;
    ev.target.value = newQuantity;
    this.carts[idx].quantity = ev.target.value;
    this.app.saveCart(this.carts);
  }

  removecart(idx: number) {
    if (confirm('Bạn có chắc muốn xóa không?')) {
      this.carts.splice(idx, 1);
      this.app.saveCart(this.carts);
      this.router.navigate(['client/cart']);
    }
  }
}
