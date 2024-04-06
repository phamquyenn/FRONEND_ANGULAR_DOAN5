import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/admin/authentication.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  checkError: any;

  formLogin: FormGroup = new FormGroup({
    email: new FormControl ('',[Validators.required, Validators.email, Validators.minLength(15)]),
    password: new FormControl('',[Validators.required]),
  });


  constructor(private auth:AuthenticationService, private router: Router){}

  get allform(){
    return this.formLogin.controls;
  }

  ngOnInit(): void { }

  onLogin() {
    this.auth.checkLogin(this.formLogin.value).subscribe(
      (res: any) => {
        const token = res.token;
        console.log(res)
        if (token) {
          localStorage.setItem('token', token);
          this.auth.getUserInfo(token).subscribe(
            (adminInfo: any) => {
              if (adminInfo) {
                sessionStorage.setItem('adminInfo', JSON.stringify(adminInfo));
                this.router.navigate(['/admin/dashbroad']).then(() => {
                  window.location.reload();
                });
                
              } else {
                console.error('Lỗi: Không có thông tin người dùng.');
              }
            },
            (error) => {
              console.error('Lỗi khi gọi API getUserInfo:', error);
            }
          );
        } else {
          console.log('Server trả về một response không hợp lệ.');
        }
      },
      (error) => {
        console.error('Lỗi trong quá trình đăng nhập:', error);
      }
    );
  }
}
