# SystemJS

Uygulamalar için dependlerin (bağımlılıkların) yüklenmesi için kullanılan, browserlar ve nodeJS için geliştirilmiş bir kütüphanedir.

```
 SystemJS.import('/js/main.js');
```

```
var SystemJS = require('systemjs');

// loads './app.js' from the current directory
SystemJS.import('./app.js').then(function (m) {
  console.log(m);
});

```

[Kaynak : www.npmjs.com/package/systemjs](https://www.npmjs.com/package/systemjs)