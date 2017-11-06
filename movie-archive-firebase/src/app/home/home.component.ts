import { Component, OnInit } from '@angular/core';
import { MovieService } from "../services/movie.service";
import { Movie } from "../models/movie";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService:MovieService,private router:Router) { }
  movies:Array<Movie>;
  ngOnInit() {
    this.movieService.discovery().subscribe((data)=>{
      this.movies = data;
    })
  }

  detail(m:Movie){
    this.router.navigate(['detail',m.id]);
  }

}
