# Package.json

Package.json dosyası uygulamanın npm tarafındaki bağımlılıklarını ve özellikleri belirten dosyalardır. Uygulamayı br yerde çalıştırmak istediğimizde package.json dosyası içerisindeki özellik ve bağımlılıkların yüklenmesi gerekecektir.

```
{
"name": "proje-name",
  "version": "1.2.0",
  "description": "Project desription",
  "author": "ag",
  "scripts": {
    "start": "node index.js",
    "electron": "electron main.js"
  },
  "bugs": {
  "url": "https://github.com/nodejitsu/browsenpm.org/issues"
  },
  "dependencies":{
	"socket.io":"*", //install latest version
	"express":"4.2.x" 
	"winston":"git://github.com/flatiron/winston#master", // install from addresses
	"bigpipe":"bigpipe/pagelet" //install from local folder
  }
  "license": "MIT"
}
```