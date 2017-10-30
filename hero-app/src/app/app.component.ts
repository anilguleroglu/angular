import { Component } from '@angular/core';
import { Hero } from "./Hero";
import { HeroService } from "./hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroService]
})
export class AppComponent {
  heroes:Array<Hero>;
  
    selectedHero:Hero;
    isHeroSelected = false;
  
    constructor(private service:HeroService) { 
  
      
    }
  
    ngOnInit() {
      this.heroes = this.service.getHeroes();
    }
  
    onSelect(hero:Hero){
      this.selectedHero = hero;
      this.isHeroSelected = true;
    }
}
