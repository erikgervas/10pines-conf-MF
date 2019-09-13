# 10 Pines Dashboard

En este repositorio hay un ejemplo de cómo implementar microfrontends usando el framework [Single Spa](https://single-spa.js.org/). En el mismo existe lo que llamos como _marco_ que sería la aplicación principal que se encarga de obtener el código de los distintos microfrontends y acomodarlos en la pantalla, y además, existen todos los microfrontends que corresponden una pequeña sección de la pantalla, los cuales están hechos en diversas tecnologías (React, Angular, Vue, ClojureScript, Preact, Inferno y WebComponents).

Para levantar el entorno hay que hacer `npm install` y luego `npm start`  en cada aplicación (marco y todos los MF's).

Para visualizar la aplicación apuntar en el browser a: `http://localhost:3000/` que es el puerto en donde levanta el marco y la url en la cuál se montan todos los MF's para presentar el _dashboard_.

