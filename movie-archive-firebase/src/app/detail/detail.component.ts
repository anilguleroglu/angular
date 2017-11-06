import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Movie } from "../models/movie";
import { MovieService } from "../services/movie.service";
import { Video } from "../models/video";
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from "../services/auth.service";
import { CommentService } from "../services/comment.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id=null;
  movie:Movie;
  videos:Array<Video>;
  constructor(private route:ActivatedRoute,private movieService:MovieService,private sanitizer:DomSanitizer,private authService:AuthService,private commentService:CommentService) { }
  currentUser;
  text;
  error;
  comments:Array<any>;

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.getMovie();

    this.route.params.subscribe((params)=>{
      this.id = params['id'];
      this.getMovie();
    });

    

    this.currentUser = this.authService.getCurrentUser();

    this.authService.statusChanged.subscribe((status)=>{

      if(status){
        this.currentUser = this.authService.getCurrentUser();
      }
      else{
        this.currentUser=null;
      }

    })

  }

  getMovie(){
    this.movieService.getById(this.id).subscribe((movie)=>{
      this.movie = movie;
    });

    this.movieService.getVideos(this.id).subscribe((videos)=>{
      this.videos = videos;
    });

    this.commentService.commentList(this.id).subscribe((data)=>{
      console.log(data);
      this.comments = data;
    });
  }

  videoUrl(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  sendComment(){
    var text = this.text;
    var movieId = this.id;
    console.log(text);
    this.commentService.newComment(movieId,text).then((data)=>{
      if(data.success){
        this.error = 'Ekleme İşlemi Başarılı';
      }
      else{
        this.error=data.msg;
      }
    });
  }

}
