import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm:FormGroup;
  error = null;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.signupForm=new FormGroup({
      "email":new FormControl(null,[Validators.required,this.customEmailValidate.bind(this)]),
      "password":new FormControl(null,[Validators.required]),
    });
  }

  customEmailValidate(control:FormControl){
    if(control.value!=null && control.value.indexOf('@vakifbank.com')==-1){
      return {"emailNotValid":true};
    }
  }
  onSubmit(){
    var email = this.signupForm.value.email;
    var pwd = this.signupForm.value.password;

    this.authService.login(email,pwd).subscribe((msg)=>{
      if(msg!=null){
        this.error = msg;
      }
      else{
        this.router.navigate(['/']);
      }
    });


  }

}
