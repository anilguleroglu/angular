# Introduction

TypeScript özgür ve açık kaynak kodlu programlama dili. Microsoft tarafından geliştirilmekte ve desteklenmekte olan TypeScript; bünyesinde barındırdığı derleyici sayesinde, yazılan kodu JavaScript koduna çevirir. TypeScript gerek istemci taraflı, gerekse sunucu taraflı yazılım geliştirmede kullanılabilmektedir.

Nesneye Yönelimli uygulama geliştirme imkanı sağlar. Javascriptin kendi içerisinde olmayan bir sürü özelliği kullanabilmemize imkan sağlar. Örneğin inheritance (kalıtım) ya da encapsulation (kapsülleme) gibi.

Javascript bilindiği gibi type safe bir dil değildir. Bu bize geliştirme aşamasında hız katarken bazı problemlerde katabiliyor. Typescript ise Javascriptin aksine Type Safe bir yazım imkanı sağlamaktadır.

[Typescript Offical Web Site](https://www.typescriptlang.org/)

[Daha Fazla detay için video](https://channel9.msdn.com/posts/Anders-Hejlsberg-Introducing-TypeScript)

```
//TypeScript
class Greeter {
    greeting: string;
    constructor (message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}  
```

```
//JavaScript
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();
```

