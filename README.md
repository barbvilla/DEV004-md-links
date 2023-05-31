# Markdown Links

## Índice

* [1. Resumen](#2-resumen)
* [2. Cómo realizar la instalación](#2-cómo-realizar-la-instalación)
* [3. Cómo utilizarlo](#3-cómo-utilizarlo)
* [4. Ejemplos](#4-ejemplos)
* [6. Entregables](#6-entregables)

***

## 1. Resumen

Este es un módulo npm instalable para verificar los links que posee un archivo MD, con el cual también se puede obtener el estado de estos y además de algunas estadisticas.

## 2. Cómo realizar la instalación

Para instalar el módulo se debe ingresar en la terminal lo siguiente:
`$ npm install @barbvilla/md-links` o `$ npm install --global @barbvilla/md-links`

## 3. Cómo utilizarlo

### JavaScript API

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



### 2) CLI (Command Line Interface - Interfaz de Línea de Comando)

`md-links <ruta> [opcion]`

#### Options

##### `--validate`

##### `--stats`

####  `--stats --validate` o `--validate --stats`