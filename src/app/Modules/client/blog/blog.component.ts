import { Component } from '@angular/core';
import { HomeGetDataService } from 'src/app/services/client/product.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  constructor(private blog:HomeGetDataService){}
  blogs: any[]=[];
  category : any[]=[];
  brands: any[]=[];

  ngOnInit(){
    this.blog.getblog().subscribe(res=>{
      
      this.blogs =res;
      
    }),
    this.blog.getcategories().subscribe(res=>{
      
      this.category =res;
      
    })
    this.blog.getbrand().subscribe(res=>{
      
      this.brands =res;
      console.log(this.brands)
      
    })
  }
}
