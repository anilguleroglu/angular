import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private authService:AuthService,private router:Router){
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        // console.log('Auth Handle');
        // var isAuthenticated =  this.authService.isAuthenticated();
        
        // if(isAuthenticated){
        //     return true;
        // }
        // else{
        //     // this.router.navigate(['/']);
        // }

        return this.authService.isAuthenticated().then((authenticated:boolean)=>{
            if(authenticated){
                return true;
            }
            else{
                this.router.navigate(['/login']);
            }
        });
         

    }
}