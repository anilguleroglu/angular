# Service

Angular içinde logiclerimizi yazabildiğimiz kısımlara Service deniyor. Bu servisler aslında normal typescript classları olarak oluşturuluyor. Daha sonra kullanılabiliyor. Service'leri Dependency Injection ile kullanmak daha performanslı ve önerilen bir yöntem.

 ```
 export class HeroService{

     heroes = ['Supermen','Spiderman'];

     getHeroes(){
         return this.heroes;
     }

 }
 ```

 
 ```
 @Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  proiders:[HeroService] //Inject edilebilmesi için gerekli
  })
export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
}
 ```