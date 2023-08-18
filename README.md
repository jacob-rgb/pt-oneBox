# TicketApp

Prueba técnica generada con la versión de angular 16.0.2 y la 16.14.2 de node (Instalación)

## Instalation

### Clásica

Para instalar correctamente las dependencias de este proyecto conviene usar la version 16.14.2 de node a través de `npm install`.

### Docker

Si se dispone de docker instalado en el dispositivo se puede levantar la aplicación siguiendo estos pasos:

1. Desde la raiz del proyecto crear la imágen de docker con el comando: `docker build -t ticket-app`
2. Desde la raiz del proyecto creando y levantando el contenedor con el siguiente comando: `docker run -d -it -p 80:80 ticket-app`
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
