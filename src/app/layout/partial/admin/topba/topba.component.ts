import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/Modules/admin/login/login.component';


@Component({
  selector: 'app-topba',
  templateUrl: './topba.component.html',
  styleUrls: ['./topba.component.css']
})
export class TopbaComponent implements OnInit {
  admin:any;

  constructor( ) {}
  ngOnInit(): void {
    
    let storage =sessionStorage.getItem('adminInfo')
    console.log(storage)
    if(storage){
      this.admin = JSON.parse(storage);
      
    }
  }
  onLogout() {
    sessionStorage.clear();
    location.assign('/admin/login'); 
  }

  
}
