import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AboutusService } from 'src/app/services/admin/aboutus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-aboutus',
  templateUrl: './add-aboutus.component.html',
  styleUrls: ['./add-aboutus.component.css']
})
export class AddAboutusComponent {
  Title: any;
  file: any;
  preview: any;

  profileFrom =  new FormGroup({
    name  : new FormControl(''),
    description : new FormControl(''),
   
  })

  constructor( private add:AboutusService, private fb: FormBuilder, private router: Router){

  }
  ngOnInit(): void {
    this.Title =" Thêm  "
  }
  onFileChange(event: any) {
    this.file = event.target.files[0];
    const reader= new FileReader();
    reader.readAsDataURL(this.file)
    reader.onload = (e: any)=>{
      this.preview = e.target.result;
    }
    console.log(this.file.name)
  }
  getImageUrl(Image: string): void {
    this.add.getImageUrl(Image)
      .subscribe(
        imageUrl => {
          
          this.preview = imageUrl;
        },
        error => {
          // Xử lý lỗi nếu có
          console.error('Error getting image URL:', error);
        }
      );
  }
  onSubmit() {

    let name:any = this.profileFrom.value.name;
    let description:any = this.profileFrom.value.description;
    
    const formData = new FormData();
    formData.append("name", name);  
    formData.append("description", description);  
    formData.append("image", this.file, this.file.name);  


    this.add.add(formData).subscribe(data => {
      if (data) {
        // Hiển thị SweetAlert2 thành công
        Swal.fire({
          icon: 'success',
          title: 'Thêm thành công',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/admin/About-us']);
        });
      } else {
        // Hiển thị SweetAlert2 lỗi
        Swal.fire({
          icon: 'error',
          title: 'Lỗi',
          text: 'Đã xảy ra lỗi khi thêm thương hiệu.',
        });
      }
    });
  }
}
