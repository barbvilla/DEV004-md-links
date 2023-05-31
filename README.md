# Markdown Links

## Índice

* [1. Resumen](#2-resumen)
* [2. Cómo realizar la instalación](#2-cómo-realizar-la-instalación)
* [3. Cómo utilizarlo](#3-cómo-utilizarlo)
* [4. Ejemplos](#4-ejemplos)

***

## 1. Resumen

Este es un módulo npm instalable para verificar los links que posee un archivo MD, con el cual también se puede obtener el estado de estos y además de algunas estadisticas.

## 2. Cómo realizar la instalación

Para instalar el módulo se debe ingresar en la terminal lo siguiente:
`$ npm install @barbvilla/md-links` o `$ npm install --global @barbvilla/md-links`

## 3. Cómo utilizarlo

### JavaScript API

```
const mdLinks = require('@barbvilla/md-links')

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
```

### CLI Command (Line Interface - Interfaz de Línea de Comando)

En la terminal se debe escribir:

`md-links <ruta> [opcion]`

 - `<ruta>`: la ruta del archivo que se desea evaluar
 - `[opcion]`: ingresar la opción selecionada 

#### Opciones

Este modulo cuenta con tres opciones disponibles:

  * `--validate` -> Si pasamos la opción `--validate`, el módulo hace una petición HTTP para averiguar si el link funciona o no.

  * `--stats` -> Si pasamos la opción `--stats` el output (salida) entrega un texto con estadísticas básicas sobre los links.

  * `--stats --validate` o `--validate --stats` -> Si pasamos esta opción, entrega un texto con estadisticas de los links y cuanto de ellos estan rotos.

## 4. Ejemplos

### 1) JavaScript API

![imagen](https://github.com/barbvilla/DEV004-md-links/assets/89232779/733c30b9-1fdb-4726-96a3-684f9bb3376e)
![imagen](https://github.com/barbvilla/DEV004-md-links/assets/89232779/f54082fd-cd83-4902-b911-9115bb38ac07)

### 2) CLI (Command Line Interface - Interfaz de Línea de Comando)

![imagen](https://github.com/barbvilla/DEV004-md-links/assets/89232779/580c0b9d-0537-4717-95c7-e1facc329abf)
![imagen](https://github.com/barbvilla/DEV004-md-links/assets/89232779/002e2cda-f7d9-4f98-81d4-bb0aa4c4daa0)

#### Options

##### `--validate`

![imagen](https://github.com/barbvilla/DEV004-md-links/assets/89232779/83c2282c-84e6-441b-b6c2-d592fdc39e12)
![imagen](https://github.com/barbvilla/DEV004-md-links/assets/89232779/582d8537-e911-4c04-be72-5d0a0b6fb1c5)

##### `--stats`

![imagen](https://github.com/barbvilla/DEV004-md-links/assets/89232779/9b2bd33f-7596-43b5-8cbd-a44f614602ec)

![imagen](https://github.com/barbvilla/DEV004-md-links/assets/89232779/35460018-feea-496d-af8b-f0ceade4779d)

####  `--stats --validate` o `--validate --stats`

![imagen](https://github.com/barbvilla/DEV004-md-links/assets/89232779/d22da23a-9018-4a46-abf0-377f83d6a509)

![imagen](https://github.com/barbvilla/DEV004-md-links/assets/89232779/862a4358-8fa5-4728-9ff3-b497ff074ec7)
