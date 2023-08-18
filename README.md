# TicketApp

Prueba técnica generada con la versión de angular 16.0.2 y la 16.14.2 de node (Instalación)

El modelo de archivos dentro de /app esta formado de la siguiente manera:

- auth: Al ser un módulo del que normalmente dependen todas las partes de la aplicación se expone en la raiz por su importancia.
- modules: Son los módulos que componen la aplicación, entendiéndose como módulo una "subaplicación" que puede o no interactuar con el resto de los módulos.
- shared: Todos los componentes,servicios,utils,domain(intefaces,enums and classes), guards, pipes, directivas que se pueden usar en cualquier parte de la aplicación.

###  Especificaciones

- Los módulos pueden contener a su vez todas las carpetas que hay en shared, añadiendo la carpeta de views, que contendrá las vistas principales de estos módulos. Es decir, tendrán sus propios dominios, servicios, directivas, etc. Los módulos ayudan a separar mejor cada parte de l aaplicación y permite de manera fácil aplicar la estrategia de lazy load. Los módulos a su vez pueden tener su propio router para gestionar sus vistas en caso de ser necesario.

- Los servicios se separan siguiendo la estrategia Facade. Por un lado tenemos los servicios encargados de realizar las peticiones a la diversas apis necesarias (<service>-http.service.ts ), por otro tenemos la parte del facade (<servicio>-facade.service.ts), encargada únicamente de obtener la información del servicio http y gestionar el estado, ya sea con rxjs, ngrx o signals.

- Los contenidos de shared al poder afectar a toda la aplicación se gestionan como standalone (pipes, directives, componets). Pudiéndose importar de manera selectiva en las diferentes partes de la aplicación.

- Se ha seguido la estrategia de detección de cambios de "onPush", de esta forma se controla de manera más estricta para no recorrer el árbol de jerarquías de componentes o vistas que angular monta por debajo de manera indicriminada.

## Instalation y ejecución

### Clásica

Para instalar correctamente las dependencias de este proyecto conviene usar la version 16.14.2 de node a través de `npm install`.
Para levantar la aplicación usar el comando: `npm start` o `ng serve`.

### Docker

Si se dispone de docker instalado en el dispositivo se puede levantar la aplicación siguiendo estos pasos:

1. Desde la raiz del proyecto crear la imágen de docker con el comando: `docker build -t ticket-app:1.0 .`
2. Desde la raiz del proyecto creando y levantando el contenedor con el siguiente comando: `docker run -p 80:80 ticket-app:1.0`
3. Acceder a la siguiente dirección en el navegador: `http://localhost:80`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
