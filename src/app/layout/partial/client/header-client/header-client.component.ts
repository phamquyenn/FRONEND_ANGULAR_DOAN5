import { Component, OnInit } from '@angular/core';
import { HomeGetDataService } from 'src/app/services/client/product.service';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {
  account:any;
  cartItemCount: number = 0;

  constructor( private home:HomeGetDataService ) {}

  ngOnInit(): void {
    let storage =sessionStorage.getItem('userInfo')
    // console.log(storage)
    if(storage){
      this.account = JSON.parse(storage);
    }
    this.cartItemCount = this.home.getCartItemCount();
  }
  onLogout() {
    sessionStorage.clear();
    location.assign('/client/Home'); 
  }
}
