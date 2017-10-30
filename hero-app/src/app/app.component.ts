import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.heroes = new Array<Hero>();
    this.hero = new Hero(0,'','','','');
  }
  heroes:Array<Hero>;

  hero:Hero;

  onAlert(){
    console.log('Uyarı');
  }

  onSave(){

    if(this.hero.index==0){

      var hero = new Hero((this.heroes.length+1),this.hero.name,this.hero.secret_identity,this.hero.description,this.hero.image);
  
      this.heroes.push(hero);
    }
    else{
      // let h = this.heroes.find((hero)=>{
      //   return hero.index===this.hero.index;
      // });
      // h.name = this.hero.name;
      // h.image = this.hero.image;
      // h.secret_identity = this.hero.secret_identity;
    }
    this.hero = new Hero(0,'','','','');
  }

  onHeroSelect(selectedHero:Hero){
    this.hero = selectedHero;
  }
  onHeroDelete(deletedHero:Hero){

    
    var heroesTemp = this.heroes;
    this.heroes=[];
    heroesTemp.forEach((hero)=>{
      if(hero.index!=deletedHero.index){
        this.heroes.push(hero);
      }
    })
  }
}
