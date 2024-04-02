import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/admin/authentication.service';
import { OrderService } from 'src/app/services/admin/order.service';



@Component({
  selector: 'app-dashbroad',
  templateUrl: './dashbroad.component.html',
  styleUrls: ['./dashbroad.component.css']
})
export class DashbroadComponent implements OnInit {
  Title:any;
  orders: any[] = []; 
  p: number=1;
  admin:any;

  constructor(private order:AuthenticationService){ }

  ngOnInit(){
    let storage =sessionStorage.getItem('userInfo')
    
    if(storage){
      this.admin = JSON.parse(storage).user
      
    }
    this.getallOrder();
    
  }
  
  
  getallOrder() {
    this.Title = "Danh Sách order ";
  
    const token = 'auth_token_quyen';
  
    this.order.getOrders(token).subscribe((res: any) => {
      this.orders = res;
      console.log(this.orders);
    });
  }
  getProductImageUrl(filename: string): string {
    return `http://localhost:3000/image/getproductimage/${filename}`;
    
  }
}
