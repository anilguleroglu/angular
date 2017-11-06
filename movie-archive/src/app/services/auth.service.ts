import { Http,Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";

import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";

@Injectable()
export class AuthService {
    constructor(private http:Http){
        
    }

    statusChanged=new EventEmitter<boolean>();

    login(email:string,password:string){

        return Observable.create((subscriber:Subscriber<string>)=>{
            var headers = new Headers();
            headers.append("Content-Type","application/json");
            this.http.post("http://localhost:3000/auth/login",{email:email,password:password},{headers:headers}).subscribe((res)=>{
                var result = res.json();
    
                if(result.success){
                    this.setCurrentUser(result.data);
                    subscriber.next(null);
                    subscriber.complete();
                }
                else{
                    subscriber.next(result.msg);
                    subscriber.complete();   
                }
            })
        })

        
    }

    setCurrentUser(u){
        localStorage.setItem('currentUser',JSON.stringify(u));
        this.statusChanged.emit(true);
    }

    logout(){
        localStorage.removeItem('currentUser');
        this.statusChanged.emit(false);
    }

    signup(email:string,password:string){
        
        var headers = new Headers();
        headers.append("Content-Type","application/json");

        return Observable.create((subscriber:Subscriber<string>)=>{
            this.http.post("http://localhost:3000/auth/signup",
            {email:email,password:password},{headers:headers}).subscribe((res)=>{

                var result =res.json();

                if(result.success){
                    this.setCurrentUser(result.data);
                    subscriber.next(null);
                    subscriber.complete();
                }
                else{
                    subscriber.next(result.msg);
                    subscriber.complete();
                }

            })
        });
        
    }

    isAuthenticated(){
        return this.getCurrentUser()!=null;
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("currentUser"));
    }

}