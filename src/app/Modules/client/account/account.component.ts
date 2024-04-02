import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  account:any;

  constructor( ) {}

  ngOnInit(): void {
    let storage =sessionStorage.getItem('userInfo')
    if(storage){
      this.account = JSON.parse(storage);
    }
  }
  onLogout() {
    sessionStorage.clear();
    location.assign('/client/Home'); 
  }
}
