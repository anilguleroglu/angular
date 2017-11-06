import {Http} from '@angular/http';
import { Injectable } from "@angular/core";

import 'rxjs/Rx';
import { Movie } from "../models/movie";
import { Video } from "../models/video";

@Injectable()
export class MovieService{

    constructor(private http:Http){

    }
    api_url = "https://api.themoviedb.org/3/"

    generateLink(path,language?){
        
        if(language==undefined || language==null){
            language=true;
        }

        var url =  this.api_url+path+'?api_key=1c68c77d20aef90efc41c6d693756b44';

        if(language){
            url = url+'&language=tr';
        }
        
        return url;
    }

    discovery(){
        return this.http.get(this.generateLink('discover/movie')).map((res)=>{
                var result = res.json().results;
                return this.convertToMovies(result);
        });
    }

    getById(id:string){

        return this.http.get(this.generateLink('movie/'+id)).map((res)=>{
            var result = res.json();
            return this.convertToMovie(result);
        });
    }
    
    getVideos(id:string){
        var url = this.generateLink('movie/'+id+'/videos',false);
        console.log(url);
        return this.http.get(url).map((res)=>{
            console.log(res);
            var results = res.json().results;

            var videos = [];

            results.forEach((item)=>{
                var v = new Video();
                v.code = item.key;
                v.name = item.name;
                v.url = "http://www.youtube.com/embed/"+v.code+"?autoplay=0";
                videos.push(v);
            });

            return videos;
        })
    }

    convertToMovie(obj){
        var m = new Movie();
        m.id=obj.id;
        m.title = obj.title;
        m.poster_path = "https://image.tmdb.org/t/p/w300/"+obj.poster_path;
        m.overview = obj.overview;
        m.short_overview = m.overview.substring(0,50)+'...';
        m.vote = obj.vote_average;
        m.release_date = obj.release_date;
        if(obj.genres!=null || obj.genres!=undefined){
            m.genres = new Array<string>();
            obj.genres.forEach((genre)=>{
                m.genres.push(genre.name);
            })
        }

        return m;
    }
    convertToMovies(objs){

        var movies = [];
        objs.forEach(item => {
            
            movies.push(this.convertToMovie(item));
        });

        return movies;

    }

}