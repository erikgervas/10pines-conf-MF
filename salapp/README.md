# Microfrontend de Salas

Esté microfrontend está hecho con [ClojureScript](https://clojurescript.org/), [Reagent](https://reagent-project.github.io/) y [Shadow-cljs](https://shadow-cljs.org)

Para levantarlo, correr `npm start`

## ¿Cómo funciona, siendo que single-spa no tiene una librería cliente?

Bueno, `shadow-cljs` usa el compilador de ClojureScript para traducir de Clojure a JS. Luego, eso se pasa por [Webpack](https://webpack.js.org/)
junto con un archivo JS que es el que hace uso de la librería `single-spa` con el cliente de React (pasándole las mismas versiones de `react` y
`react-dom` que usa Reagent) y eso es lo que se sirve (en este caso, es el mismo `webpack-dev-server` el que lo sirve).

Para desarrollar, existe un script de npm:

``` shell
npm run dev
```

pero es mejor si se usa alguna integración con el IDE/editor de texto con ClojureScript (hay un build de shadow-cljs para esto, llamado `dev`)
