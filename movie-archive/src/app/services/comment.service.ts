import { Http,Headers } from "@angular/http";
import 'rxjs/Rx';
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CommentService {

    constructor(private http:Http,private authService:AuthService){
        
    }

    newComment(movieId,text){
        var currentUser = this.authService.getCurrentUser();

        var token = currentUser.token;
        var headers = new Headers();
        headers.append("Content-Type","application/json");
        headers.append("ag-ma-token",token);
        return this.http.post('http://localhost:3000/comment/new',{text:text,movieId:movieId},{headers:headers}).map((res)=>{
            return res.json();
        })
    }

    commentList(movieId){
        var currentUser = this.authService.getCurrentUser();

        var token = currentUser.token;
        var headers = new Headers();
        headers.append("Content-Type","application/json");
        headers.append("ag-ma-token",token);

        return this.http.get('http://localhost:3000/comment/list/'+movieId).map((res)=>{
            return res.json();
        });
    }

}