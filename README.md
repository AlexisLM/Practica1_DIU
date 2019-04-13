# practica1

> Practica 1 - CSS  
> \- **López Matías Alexis Brayan**  
> \- **Martínez Ríos Ricardo**

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Ejercicios

### **Ejercicio 1a**

> Si los párrafos contenidos en "bloque" tienen un ancho de 650px y esto es el
> 90% del ancho definido a su elemento contenedor, ¿cuál es su ancho original?
> ¿cómo quedarían dichas reglas en CSS?
>> Ya que los párrafos por defecto tiene un ancho igual al de su elemento padre,
>> entonces su ancho original es de 722px.  
>> Las reglas css serían de la siguiente forma:
>> ``` css
>> #bloque { width: 722px; }
>> #bloque p { width: 90%; }
>> ```

### **Ejercicio 2**

> ¿Cómo resolver el siguiente problema relacionado a medidas "Textos cada vez más
> grandes" y "Textos cada vez más pequeños"?
>> R: Como sabemos, al utilizar unidades de porcentaje (%) el tamaño calculado
>> por el navegador es de acuerdo al tamaño actual del padre.
>> Por ejemplo:
>> ``` html
>> <html>
>> <head>
>>    <style>
>>        body   { font-size: 14px; }
>>        #padre { font-size: 90%;  }
>>        #hijo  { font-size: 50%;  }
>>        #nieto { font-size: 50%;  }
>>    </style>
>> </head>
>> <body>
>>    <div id="padre">
>>        <div id="hijo">
>>            <div id="nieto"></div>
>>        </div>
>>    </div>
>> </body>
>> </html>
>> ```
>> En el ejemplo anterior, el tamaño de fuente del elemento `#nieto` es el %50
>> del tamaño de fuente del elemento `#hijo` que a su vez tiene un tamaño de
>> fuente del %50 del tamaño de fuente del elemento `#padre`, y este a su vez es
>> el %90 del tamaño de fuente del `body`. Por lo tanto, el tamaño de fuente
>> final es excesivamente pequeño, de modo que para solucionar esto es utilizar
>> un tamaño de fuente fijo, por ejemplo `font-size: 10px;` para evitar que se
>> siga haciendo más pequeña la fuente.  
>> Lo mismo se puede hacer para el caso de fuentes más grandes.

### **Ejercicio 7**

> Explica las siguientes propiedades CSS.
>> 1. **`margin: 25px 30px;`** Significa margen superior e inferior de 25px y
>>    derecho e izquierdo de 30px.
>>
>> 2. **`margin: 25px 40px 75px;`** Significa margen superior de 25px, margen
>>    izquierdo y derecho de 40px e inferior de 75px.
>>
>> 3. **`margin: 30px;`** Significa margen de 30px para los cuatro lados de la
>>    caja.
>>
>> 4. **`margin: 40px;`** Cuatro lados con margen de 40px.  
>>    **`margin-bottom: 30px;`** Sobreescritura del margen inferior con 30px;
>>
>> 5. **`margin-left: 35px;`** Margen izquierdo de 35px.  
>>    **`margin: 30px;`** Se sobreescribe el margen izquierdo con 30px y los
>>    demás se establecen en 30px.
>>
>> 6. **`margin: 10px 5px 10px 5px;`** Margen superior de 10px, derecho de 5px,
>>    inferior de 10px e izquierdo de 5px.
>>
>> 7. **`margin: 12px 7px;`** Margen superior e inferior de 12px e izquierdo y
>>    derecho de 7px.  
>>    **`margin-top: 20px;`** Se sobreescribe el margen superior en 20px.

### **Ejercicio 8**

> Concentrándonos en el ejemplo propuesto en la imagen 1.7 sobre márgenes
> verticales. Cambiemos un poco los parametros del ejemplo supongamos que el
> margen del div con id contenido es de 16px en vertical y el margen de los
> párrafos es de 20px en vertical. Con qué regla se consigue el siguiente
> resultado.
>> R: Hay varias maneras de resolverlo, una por ejemplo es usar margin-top: 36px;
>> sobre #contenido para que el margen colapse a 36px. Otra forma es utilizar
>> display: inline-block; sobre #contenido para evitar que ocurra colapso del
>> margen.

### **Ejercicio 10**

> Explica las siguientes propiedades CSS.
>> 1. **`padding: 5px 15px;`** Padding vertical de 5px y lateral de 15px.`
>>
>> 2. **`padding: 5px 15px 7px;`** Padding superior de 5px, lateral de 15px e
>> inferior de 7px.
>>
>> 3. **`padding: 30px 15px 0 20px;`** Padding superior de 30px, derecho de
>> 15px, inferior de 0px e izquierdo de 20px.
>>
>> 4. **`padding: 15px;`** Padding de 15px en todos los lados de la caja.  
>>    **`padding-left: 25px;`** Se sobreescribe el padding izquierdo con 15px.
>>
>> 5. **`padding-top: 15px;`** Padding superior de 15px.  
>>    **`padding: 25px;`** Se sobreescribe el padding superior con 25px y los
>>    demás lados se establecen en 25px.
>>
>> 6. **`padding-left: 12px;`** Padding izquierdo de 12px.  
>>    **`padding-top: 10px;`** Padding superior de 10px.  
>>    **`padding-bottom: 12px;`** Padding inferior de 12px.  
>>    **`padding-right: 10px;`** Padding derecho de 10px.  

### **Ejercicio 11**
> ¿Qué ocurre cuando una regla resumida relacionada con el borde no establece un
> estilo? ejemplifica.
>> Para el caso de las propiedades `border-width`, `border-style` y
>> `border-color` la sintaxis para 4 valores es:
>>> `border-[propiedad]: <top> <right> <bottom> <left>;`
>>
>> En caso de que se omita uno la sintaxis queda:
>>> `border-[propiedad]: <top> <right-left> <bottom>;`
>>
>> En caso de que se omitan dos valores:
>>> `border-[propiedad]: <top-bottom> <right-left>;`
>>
>> En caso de que se omitan tres valores:
>>>   `border-[propiedad]: <top-right-bottom-left>;`
>>
>>Para el caso de la propiedad border la sintaxis es:
>>> `border: [border-width || border-style || border-color || inherit];`
>>
>>Si se omite `border-width` el valor por defecto es `medium`.  
>>Si se omite `border-style` el valor por defecto es `none`.  
>>Si se omite `border-color el valor por defecto es el color del elemento.

### **Ejercicio 12**

> ¿Qué podemos hacer cuando es necesario establecer propiedades comunes a los
> bordes de un elemento pero también existen propiedades diferentes entre ellos?
>> Se pueden utilizar los shorthands para las propiedades comunes y
>> posteriormente utilizar las propiedades simples para los valores específicos.

### **Ejercicio 15**

> ¿Cuál es la ventaja de establecer una imagen y un color de fondo a un
> elemento, en lugar de únicamente establecer una imagen?
>> Al establecer un color de fondo te aseguras que siempre habrá algo de fondo,
>> aunque únicamente sea un color. Además, es posible aplicar un tinte a la
>> imagen de fondo si también se le aplica un color de fondo.

### **Ejercicio 16**

> Construir las reglas de estilo necesarias para cumplir los siguientes estilos,
> aplicados al documento index.html de la carpeta proyecto con ruta:
> complementos/box_model/ ejercicios/project/. Se permite utilizar imágenes
> propias de diseño para aplicarlas en el ejemplo. Se recomienda la página
> stripegenerator para diseñarlas. Respecto a images de fondo, cuando no se
> indique un valor referente a la propiedad repeat aplicar el valor por default,
> es decir, repeat (en eje x y eje y). Las imágenes referentes al css, se
> encuentran en la ruta: public/stylesheets/images.  
>> **NOTA: Este ejercicio se guardó en ___src/assets/ejercicio16___ y las
>> reglas css se se guardaron en ___public/css/style.css___ dentro de la
>> misma carpeta.**
>>
>>``` css
>> #header {
>>   width: 100%;
>>   height: 150px;
>>   margin: 0 auto;
>>   padding: 0;
>> }
>>
>> #header > div > div {
>>   width: 920px;
>>   margin: 0 auto;
>> }
>>
>> #sec-telefonos {
>>   height: 15px;
>>   background-color: #000;
>>   padding-bottom: 5px; /* Faltaba esta regla en las notas */
>> }
>>
>> #sec-menu {
>>   height: 90px;
>>   background: #272F18 url("./images/fondo_menu.png") repeat;
>> }
>>
>> #sec-telefonos ul li {
>>   width: 90px;
>>   padding: 0 3px;
>>   margin-top: 6px;
>>   border-left: 1px solid #D6D6D6;
>> }
>>
>> #sec-telefonos ul li span { margin: 2px; }
>>
>> #container {
>>   width: 920px;
>>   margin: 25px auto;
>> }
>>
>> h1 {
>>   margin: 5px 15px;
>>   font: small-caps 1.5em;
>>   color: #585858;
>> }
>>
>> p {
>>   padding: 5px;
>>   color: #000;
>>   font-size: 1.1em;
>>   text-align: justify;
>>   text-indent: 10px;
>> }
>>
>> #content {
>>   width: 100%;
>>   margin-bottom: 30px;
>> }
>>
>> #general {
>>   width: 613px;
>>   height: 400px;
>> }
>>
>> #texto {
>>   width: 896px;
>>   height: 150px;
>>   margin: 10px;
>>   color: #000;
>>   background-color: #fff;
>> }
>>
>> .secciones {
>>   width: 260px;
>>   height: 390px;
>>   padding: 5px;
>>   margin: 10px 15px;
>>   border: 1px solid #F5F5F5;
>>   background: #FAFAFA url("./images/fondo-secciones.jpeg") repeat;
>> }
>>
>> .secciones >div {
>>   height: 50%;
>>   border-top: 1px solid #FFF;
>>   border-bottom: 1px solid #C6C6C6;
>> }
>>
>> .secciones > div h1 {
>>   margin: 5px 15px;
>>   padding-bottom: 3px;
>>   color: #292929;
>> }
>>
>> .secciones > div p {
>>   height: 110px;
>>   color: #C1C1C1;
>> }
>>
>> .secciones a.ruta {
>>   margin: 5px;
>>   padding: 6px;
>>   color: #FFF;
>>   background-color: #2D2D2D;
>> }
>>
>> #texto {
>>   height: 100%;
>>   background: #FAFAFA url("./images/fondo-secciones.jpeg") repeat;
>> }
>>
>> #texto img {
>>   margin: 5px 5px 5px 0;
>>   padding: 6px;
>>   border-right: 1px solid #C6C6C6;
>> }
>>
>> #texto p {
>>   width: 650px;
>>   margin: 5px;
>>   font-size: 1.2em;
>> }
>>
>> #texto div {
>>   border-left: 1px solid #FFF;
>>   border-top-width: 0;
>>   margin-left: 0;
>> }
>>
>> #footer {
>>   width: 100%;
>>   min-height: 100px;
>>   color: #FFF;
>>   background: #3D3D3D url("./images/fondo-footer5.png");
>> }
>>
>> #footer div {
>>   width: 920px;
>>   margin: 0 auto;
>> }
>>
>> #footer ul {
>>   margin-top: 35px;
>>   padding: 0;
>>   list-style-type: none;
>> }
>> ```