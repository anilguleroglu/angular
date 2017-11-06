import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CommentService {

    constructor(private http: Http, private authService: AuthService, private db: AngularFireDatabase) {

    }

    newComment(movieId, text) {
        var currentUser = this.authService.getCurrentUser();
        var obj = {};
        obj[movieId] = true;
        var c = {
            text: text,
            username: currentUser.email
        };

        return this.db.list('comments_'+movieId).push(c);

    }

    commentList(movieId) {
        var currentUser = this.authService.getCurrentUser();

        // return this.db.list('comments',query=>{
        //     query.child('movieId').equalTo(movieId);
        //     return query;
        // }).valueChanges();
        return this.db.list('comments_'+movieId).valueChanges();
    }

}