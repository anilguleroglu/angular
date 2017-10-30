# Data Binding

Angular içerisinde data bid etmek için birden fazla alternatif bulunmaktadır. Bunlardan bazıları aşaıdaki gibidir.

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

 ## *ngIf

 Ekrana basılacak olan elementin hangi koşullarda basılması gerektiğini belirtir. boolean expression alır.

 ```
 <span *ngIf='isSelected'>Selected Hero Name : {{selectedHero.name}}</span>
 ```

 ## *ngFor

 Ekrana dizi tipli dataları basarken kullanabileceğimiz yapıdır.

 ```
 <h4>Heroes</h4>
 <ul>
 <li *ngFor='let hero of heroes'>
    {{hero.name}}
 </li>
 </ul>
 ```