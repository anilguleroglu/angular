import { Http,Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";

import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";

import * as firebase from 'firebase'
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthService {
    constructor(private http:Http,private authService:AngularFireAuth){
        
    }

    statusChanged=new EventEmitter<boolean>();

    login(email:string,password:string){

        return this.authService.auth.signInWithEmailAndPassword(email,password);

    }

    setCurrentUser(u){
        localStorage.setItem('currentUser',JSON.stringify(u));
        this.statusChanged.emit(true);
    }

    logout(){
       firebase.auth().signOut();
    }

    signup(email:string,password:string){
        
        return this.authService.auth.createUserWithEmailAndPassword(email,password);
        
    }

    isAuthenticated(){
        return this.authService.auth.currentUser!=null;
    }

    getCurrentUser(){
        return this.authService.auth.currentUser;
    }

}