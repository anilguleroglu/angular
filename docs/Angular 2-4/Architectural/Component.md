# Component

Component yapısı Angular içerisinde Viewlar tanımlamak için kullanılır. 

```
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
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

## Interpolation

Component içerisinde tanımlanmış olan değişkenlerin ekran üzerinde gösterilmesi için kullanılan yapıya denir. **{{propertyName}}** olarak tanımlanır. 

```
<span>Hero Name : {{selectedHero.name}}</span>

<!--Output-->
<!--<span> Hero Name : Superman </span>-->
```

## Property Bindings

Ekrandaki tagların içerisine text olarak değil de propertyler ile data bind etme durumudur.

 ```
 <span [innerText]='selectedHero.name'></span>
 ```

## Event Binding

Component üzerinde tanımlanmış olan metodları Template tarafındaki eventler ile bağlamaya yarar.

 ```
 <button (click)='onSave()'>Kaydet</button>
 ```

 ## Expressions

 Expresionlar ile standart Html attributeleri üzerinde expressionlar ile müdahaleler yapılabilir. Yani disable olma durumunu herhangi bir property'ye bağlayabiliriz.

 ```
<button [disabled]='!form.valid'>Kaydet</button>
 ```

 ## @Input()

 Componentlerin çağırıldıkları yerlerden data alabilmeleri için kullanılır.

 ```
 //Tanımlama
 @Input() defaultColour:String;

 //Kullanım
 <my-custom-component [defaultColor]="'red'"></my-custom-component>
 ```

 ## @Output()

 Componentlerin çağrıldıkları yerlerde data gönderebilmeleri için kullanılırlar.

  ```
 //Tanımlama
 @Output() onSelected = new EventEmitter<Hero>;

 onSelect(hero:Hero)
 {
     this.onSelected.emit(hero);
 }

 //Kullanım
 <my-custom-component (onSelected)='onSelect($event)'></my-custom-component>

onSelect(hero:Hero){
    this.selectedHero = hero;
}
 ```

 **$event** framework içerisinde functionlara event parametresini otomatik olarak göndermek için kullanılır.
