import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HomeGetDataService } from 'src/app/services/client/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkError: any;

  formLogin: FormGroup = new FormGroup({
    email: new FormControl ('',[Validators.required, Validators.email, Validators.minLength(15)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  });
   constructor(private login: HomeGetDataService){}

   get allform(){
    return this.formLogin.controls;
   }
   ngOnInit(): void{

   }
   onLogin(){
    this.login.checkLogin(this.formLogin.value).subscribe((res: any)=>{
      // console.log(res);
      if(res[0]){
        sessionStorage.setItem('login', JSON.stringify(res[0]));
        location.assign('/client/Home')
      }else{
        this.checkError ="Tài khoản không tồn tại "
      }

    })
   }
}
