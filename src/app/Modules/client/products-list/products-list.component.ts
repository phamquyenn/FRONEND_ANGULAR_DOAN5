import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeGetDataService } from 'src/app/services/client/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  id: any;
  productall: any[] = [];
  category: any[] = [];
  brands: any[] = [];

  constructor(private active: ActivatedRoute, private dataService: HomeGetDataService) { }

  ngOnInit(): void {

    this.dataService.getcategories().subscribe(res => {
      this.category = res;
    });

    this.dataService.getbrand().subscribe(res => {
      this.brands = res;
      console.log(this.brands);
    });

    this.id = this.active.paramMap.subscribe((query: any ) =>{
      this.id =query.get('id');

      this.dataService.getproductsbycategoriesID(this.id).subscribe(res => {
        this.productall = res;
        
      });
    })
  }
}
