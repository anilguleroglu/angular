import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { WeatherService } from "../weather.service";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  temp = 'Hesaplanıyor...';
  icon = '';

  constructor(private http:Http,private weatherService:WeatherService) { }

  ngOnInit() {

    this.weatherService.getWeather().subscribe((data)=>{
            console.log(data);
            this.temp = data.main.temp + ' derece' ;
            this.icon = data.weather[0].id;
    })

      // this.promise().then((obj)=>{
      //   this.write(obj);
      // }).catch((obj)=>{
      //   this.write("HATA"+JSON.stringify(obj));
      // });

      // this.observable().subscribe((data)=>{
      //   console.log(data);
      //   this.promise().then((data)=>{
      //     console.log(data);
      //   })
      // });

      // console.log("Alt Satır");

  }

  write(text){
    console.log(text);
  }

  promise():Promise<any>{
    const promise = new Promise(
      (resolve,reject)=>{
        setTimeout(
          function(){
            resolve({name:'Kamil',surname:'dingilov'});
            
            // resolve({name:'kamil',surname:'dingilov'});
        }
        ,500)

        // setTimeout(
        //   function(){
        //     reject({name:'hata',surname:'dingilov'});
        // }
        // ,7000)
    });

    return promise;
  }

  observable(){
   
    var obs = Observable.create((resolve:Subscriber<any>)=>{

      setTimeout(
        function(){
          resolve.next("5000");
          // resolve.error('errr');
          resolve.complete();
      }
      ,5000);

      setTimeout(
        function(){
          resolve.next("6000");
      }
      ,6000);

      setTimeout(
        function(){
          resolve.next("1000");
      }
      ,1000);

      setTimeout(
        function(){
          resolve.next("2000");
      }
      ,2000)
      
      
    });

    return obs;
  }

}
