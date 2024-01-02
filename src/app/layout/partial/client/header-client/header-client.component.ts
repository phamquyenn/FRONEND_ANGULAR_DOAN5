import { Component, OnInit } from '@angular/core';
import { HomeGetDataService } from 'src/app/services/client/product.service';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {
  account:any;

  constructor( ) {}

  ngOnInit(): void {
    let storage =sessionStorage.getItem('login')
    if(storage){
      this.account = JSON.parse(storage);
    }
  }
  onLogout() {
    sessionStorage.clear();
    location.assign('/client/Home'); 
  }
}
