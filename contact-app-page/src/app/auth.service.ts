import { EventEmitter } from "@angular/core";

export class AuthService {

    loggedIn=false;

    statusChanged = new EventEmitter<boolean>();

    login(){
        this.loggedIn=true;
        this.statusChanged.emit(true);
    }

    logout(){
        this.loggedIn=false;
        this.statusChanged.emit(false);
    }

    isAuthenticated():Promise<boolean>{
        return new Promise((resolve,reject)=>{
                resolve(this.loggedIn);
        })
    }

}