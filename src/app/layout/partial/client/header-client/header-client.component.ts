import { Component, OnInit } from '@angular/core';
import { HomeGetDataService } from 'src/app/services/client/product.service';
import { UserService } from 'src/app/services/client/user.service';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {
  account:any;
  cartItemCount: number = 0;
  // allData: any[];

  constructor( private home:HomeGetDataService, private user:UserService ) {}

  ngOnInit(): void {
    let storage =sessionStorage.getItem('userInfo')

    if(storage){
      this.account = JSON.parse(storage);
    }
    this.cartItemCount = this.home.getCartItemCount();
    // 
    // this.fetchAllDataForSearch();
  }
  onLogout() {
    sessionStorage.clear();
    location.assign('/client/Home'); 
  }

  // fetchAllDataForSearch(): void {
  //   this.homeService.getAllDataForSearch().subscribe(
  //     (data: any[]) => {
  //       this.allData = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching all data for search:', error);
  //     }
  //   );
  // }
  
}
