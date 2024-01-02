import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeGetDataService } from 'src/app/services/client/product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  // check
  checkError : string ='';
  // Form
  formRegister : FormGroup = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.minLength(15)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(20)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{3,}$/)]),
    role: new FormControl('client')
  });
  get allform(){
    return this.formRegister.controls;  
   }

  constructor (private register:HomeGetDataService){}

  ngOnInit(): void {
    
  }
  // 
  onRegister(){
    if( this.formRegister.invalid){
      return;
    }
    
    this.register.Register(this.formRegister.value).subscribe((res : any ) =>{
      if(res.status == false){
        this.checkError = res.result;
      }else{
        location.assign('/client/login')
      }
      
    })
  }
}
