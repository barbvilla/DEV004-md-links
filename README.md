# Markdown Links

## Índice

* [1. Resumen](#2-resumen)
* [2. Cómo realizar la instalación](#2-cómo-realizar-la-instalación)
* [3. Cómo utilizarlo](#3-cómo-utilizarlo)
* [4. Ejemplos](#4-ejemplos)
* [6. Entregables](#6-entregables)

***

## 1. Resumen

Este es un módulo npm instalable para verificar los links que posee un archivo MD, con el cual también se puede obtener el estado de estos y además de algunas estatisiticas.

## 2. Cómo realizar la instalación

Para instalar el módulo se debe ingresar en la terminal lo siguiente:
`$ npm install @barbvilla/md-links` o `$ npm install --global @barbvilla/md-links`

## 3. Cómo utilizarlo



Este modulo cuenta con tres opciones disponibles:

  * --validate => Esta opción entrega la información de status de cada link evaluado.

  * --stats => Esta opción entrega estadisticas de los links.

  * --stats --validate o --validate --stats => Esta opción entrega estadisticas de los links y cuales de ellos estan rotos.

En consola se debe escribir:
`md-links <ruta> [opcion]`

 - ruta: la ruta del archivo que se desea evaluar
 - opcion: ingresar la opción selecionada 

## 4. Ejemplos

#### Ejemplo (resultados como comentarios)

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
```

### 2) CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la **terminal**:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

## 6. Entregables

Módulo instalable via `npm install <github-user>/md-links`. Este módulo debe
incluir tanto **un ejecutable** como **una interfaz** que podamos importar con `require`
para usarlo programáticamente.