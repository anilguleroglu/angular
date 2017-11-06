import { Component } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser;

  title = 'app';

  constructor(private authService:AuthService,private router:Router){

    this.currentUser=this.authService.getCurrentUser();
    
    this.authService.statusChanged.subscribe((status)=>{
      if(status){
        this.currentUser = this.authService.getCurrentUser();
        
      }
      else{
        this.currentUser = null;
      }
    })
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
