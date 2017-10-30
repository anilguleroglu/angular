# Metadata

Metadatalar classlara ve class memberlara tanımlamalar ve görev atamaları yapmak için kullanılırlar.
Örneğin; Component, Directive, Input, Output...

  ```
  @Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
  })
  ```

  ```
  @Input selectedHero:Hero;
  ```

