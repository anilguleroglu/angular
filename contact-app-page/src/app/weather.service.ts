import {Http} from '@angular/http';
import 'rxjs/Rx';
import { Injectable } from "@angular/core";

@Injectable()
export class WeatherService{
    
     constructor(private http:Http){}
    getWeather(){

        return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=b551e49dc3c2457e99d3c767ce10f829&units=metric').map((res)=>{

            console.log(res);
            
            return res.json();
        });

    }
}