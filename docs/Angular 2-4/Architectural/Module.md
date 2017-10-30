# Module

Angular modüler bir yapıya sahiptir. Her Angular uygulaması en azından bir Module (AppModule) sahiptir. Tüm uygulama bu modül içerisinde hazırlanır ve konfigurasyonları yapılır.

```
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

### @NgModule

@NgModule bir tanımlama fonksiyonudur. Bu fonksiyon ile bir class'a modüle yeteneleri tanımlanır.

#### imports

Bu kısımda modül içerinde kullanılacak olan diğer modüller tanımlanır.

#### providers

Bu kısımda uygulama içerisinde kullanılacak olan servislerin tanımlamaları yapılmaktadır. Genel amacı Dependency Injection için genel tanımlamalar yapılmasıdır.

#### declarations

View Nesnelerinin tanımlanması için kullanılır. Angular içerisinde 3 tip View Nesnesi vardır; Component, Directive, Pipe.

#### exports

Bu kısımda mdül içerisinde tanımlanmış olup, diğer modüller tarafından kullanılabilecek olan yapılar tanımlanır.

#### bootstrap

Uygulamanın ana view'ıdır. Uygulama çalıştığında burada belirttiğimiz sayfadan çalışmaya başlar.


Angular içerisinde ilk çalışan nesne **main.ts** dosyasıdır. Bu dosya içerisinde uygulamanın olduğu **AppModule** nesnesi çağırılır.

```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```

