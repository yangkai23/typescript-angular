import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm =new FormGroup({
    uemail:new FormControl("",[Validators.required,Validators.email,Validators.maxLength(20)]),
    upass:new FormControl("",[Validators.required])
  })
  get uemail(){
    return this.loginForm.get("uemail");
  }
  get upass(){
    return this.loginForm.get("upass")
  }
  login(){
    console.log(this.loginForm);
    
  }
}
