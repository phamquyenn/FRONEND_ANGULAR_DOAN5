import { Component, OnInit  } from '@angular/core';
import { CustomerService } from 'src/app/services/admin/customer.service';
import { OrderService } from 'src/app/services/admin/order.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dashbroad',
  templateUrl: './dashbroad.component.html',
  styleUrls: ['./dashbroad.component.css']
})
export class DashbroadComponent implements OnInit {
  Title:any;
  orders: any[] = []; 
  p: number=1;
  TotalOrder: number = 0;
  orderCount:number =0;
  CountOrder: number =0;
  customer: any[]= [];
  totalCus: number =0;
  monthlySalesData: any[] = new Array(12).fill(0);
  yearlySalesData: any[] = []; 
  years: number[] = []; 


  constructor(private order:OrderService, private cus: CustomerService){ }

  ngOnInit(){
    
    this.getallOrder();
    this.order.getToTalOrders().subscribe((res: any)=>{
      this.TotalOrder =res.total
    });
    this.cus.getall().subscribe((res: any)=>{
      this.customer =res
      const totalCustomers = this.customer.length;
      this.totalCus =totalCustomers
    });

    this.getWeeklyStatistics();
    // this.getMonthlyStatistics();
    // this.getYearlyStatistics();
  }

  // Thongke theo tuần

  getWeeklyStatistics(): void {
    const weekdays = ['thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];
    const totalSalesData: number[] = new Array(7).fill(0);
  
    weekdays.forEach((weekday, index) => {
      this.order.getOrderByWeekday(index + 1)
        .subscribe(data => {
          data.forEach((item: any) => {
            totalSalesData[index] += item.total_sales;
          });
  
          if (index === weekdays.length - 1) {
            this.createChart(weekdays, totalSalesData);
          }
        });
    });
  }
  
  
  // theo tháng 
  getMonthlyStatistics(): void {
    const months = ["tháng1", "Tháng2", "Tháng3", "Tháng4", "Tháng5", "Tháng6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    for (let month = 1; month <= 12; month++) {
      this.order.getSalesStatistics('month', month).subscribe(data => {
        console.log('Tháng',data);
        this.monthlySalesData[month - 1] = data.total_sales;
        if (month === 12) {
          this.createChart( months,this.monthlySalesData);
        }
      });
    }
  }
  // theo năm
  // getYearlyStatistics(): void {
  //   const currentYear = new Date().getFullYear();
  //   const years = Array.from({length: 5}, (_, i) => currentYear - i);
  //   years.forEach(year => {
  //     this.order.getSalesStatistics('year', year).subscribe(data => {
  //       console.log('năm',data);
  //       this.yearlySalesData.push(data.total_sales);
  //       if (this.yearlySalesData.length === 5) {
  //         this.createChart(years.map(String), this.yearlySalesData);
  //       }
  //     });
  //   });
  // }
  
  // Chart js
  createChart(labels: string[], data: number[]) {
    const ctx = document.getElementById("singelBarChart") as HTMLCanvasElement;
    ctx.height = 150;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Thống kê',
          data: data,
          borderColor: "rgba(0, 194, 146, 0.9)",
          borderWidth: 0,
          backgroundColor: "rgba(0, 194, 146, 0.5)"
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });    
  }
  
  
  getallOrder() {
    this.Title = "Danh Sách order ";
  
    this.order.getOrders().subscribe((res: any) => {
      this.orders = res;
      console.log(this.orders);
      const totalOrders = this.orders.length;
      this.CountOrder = totalOrders;
    });
   
    
    // this.order.getCountOrders().subscribe((res: any)=>{
    //   this.orderCount = res.order_count;
    //   console.log(this.orderCount)

    // });
    
  }
 
  getProductImageUrl(filename: string): string {
    return `http://localhost:3000/image/getproductimage/${filename}`;
    
  }
  
}
