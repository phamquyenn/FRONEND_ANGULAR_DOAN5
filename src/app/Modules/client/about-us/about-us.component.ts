import { Component } from '@angular/core';
import { AboutusService } from 'src/app/services/admin/aboutus.service';
import { ProductsService } from 'src/app/services/admin/products.service';
import { HomeGetDataService } from 'src/app/services/client/product.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  constructor(private aboutus:AboutusService, private image: ProductsService){}
  about: any[]=[];
  blogImage: string ='';

// 
  ngOnInit(){
    this.aboutus.getabout().subscribe(res=>{
      
      this.about =res;
      console.log(this.about)
      
    });
  }
  // 
  loadProductImage(filename: any) {
    this.image.getProductImage(filename).subscribe(
      (response: any) => {
        this.blogImage = response.filename;
        console.log(this.blogImage)
      },
      (error) => {
        console.error('Lỗi khi lấy tên ảnh:', error);
      }
    );
  }
// 
  getImageUrl(filename: string): string {
    return `http://localhost:3000/about/getimage/${filename}`;
    
  }
}
