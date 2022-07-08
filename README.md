# Angular 2 Shop

Esta es una implementación de una página e-commerce con un navegador y un carro de compra incluidos, construida en Angular.

**Demo personal:** [panchosavenergy.github.io/angular2-shop](https://panchosavenergy.github.io/angular2-shop/)
**Demo original:** [carlosroso.com/angular2-shop](http://carlosroso.com/angular2-shop/)

## Características
* Ordena los productos por nombre, precio ascendente y precio descendente.
* Búsqueda instantánea por el nombre del producto.
* Filtros de productos por categoría, rango de precios, disponibilidad del producto, y se pueden agregar filtros personalizados.
* Se pueden agregar productos al carro de compra.
* Se pueden ver detalles y también administrar el carro de compra.
* También se puede cargar datos propios a través de la app. Usted observará un botón rojo con un ícono *link*, cliquéelo y pegue la URL. El archivo JSON debe estar escrito en un formato específico. [Vea el ejemplo a continuación](http://carlosroso.com/angular2-shop-json/). **IMPORTANTE:** Debe estar seguro de configurar correctamente la cabecera `Access-Control-Allow-Methods` en el JSON recibido de la respuesta HTTP. 
* Compatible con Angular 6.
* **Es una UI bastante elegante con algunas animaciones bien trabajadas para mejorar UX**

## Instalación

Clone el proyecto.
```bash
git clone https://github.com/caroso1222/angular2-shop
```

Instale las dependencias npm dentro del repositorio del proyecto.
```bash
cd angular2-shop
npm install
```

Asegúrese de tener instalado `angular-cli`. El proyecto viene incluido con Angular 6, recomiendo usar ese ya que con versiones posteriores podría producir errores de construcción (build).
```bash
npm install -g angular-cli
```

Inicie la aplicación.
```bash
ng serve
```

Finalmente, abra una pestaña en el navegador y escriba **localhost:4200**.


## Contribuciones

Este proyecto ha sido generado con [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.15.

### Corriendo el servidor de desarrollo
Escriba `ng serve` en la consola para iniciar el servidor de desarrollo. Navegue en la dirección `http://localhost:4200/`. La app se recargará automáticamente si se modifica alguno de los archivos fuente.

### Escalamiento de código

Escriba `ng generate component component-name` para generar un nuevo componente. También puede usar `ng generate directive/pipe/service/class`.

### Build

Escriba `ng build` para construir el proyecto. Los archivos generados por el build serán almacenados en el repositorio `dist/`. Agregue `-prod` tras lo escrito anteriormente para hacer un build de producción.

### Corriendo pruebas unitarias

Escriba `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

### Corriendo pruebas end-to-end

Escriba `ng e2e` para ejecutar las pruebas end-to-end a través de [Protractor](http://www.protractortest.org/).
Antes de iniciar el testing, asegúrese que el servidor esté generado a través del comando `ng serve`.


Traducido por: [Francisco Marín](https://github.com/PanchoSavEnergy)
