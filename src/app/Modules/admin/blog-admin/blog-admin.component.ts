import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/admin/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css']
})
export class BlogAdminComponent implements OnInit {
  Title: any;
  p: number=1;
  blogs: any[] = []; 
  pageSize: number = 10;

  constructor(private blog:BlogService){

  }

  ngOnInit(): void {
    
    this.blogview();
    this.Title ="Danh Sách Sản Phẩm "
  }
  blogview(){
    this.blog.getblog().subscribe(res=>{
      
      this.blogs =res;
    })
  }
  onDelete(id: number) {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Đồng ý"
        this.blog.delete(id).subscribe(res => {
          this.blogview();
        });
      } else {
        // User clicked "Hủy" or closed the dialog
        console.log('Xóa sản phẩm đã bị hủy bởi người dùng.');
      }
    });
  }

  
}
