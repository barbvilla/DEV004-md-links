#!/usr/bin/env node

/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import chalk from 'chalk';
import argv from 'node:process';
import { mdLinks } from './index.js';

// chalk
const ok = chalk.greenBright;
const unique = chalk.yellowBright;
const error = chalk.redBright;
const data = chalk.blueBright;
const line = chalk.inverse.cyan;

// argv
const route = process.argv[2];
const option = process.argv[3];
const option2 = process.argv[4];

if (route && option === undefined) {
  mdLinks(route)
    .then((res) => {
      res.forEach((element, i) => {
        console.log(' ');
        console.log(unique(i += 1));
        console.log(data(`href: ${element.href}`));
        console.log(data(`text: ${element.text}`));
        console.log(data(`file: ${element.file}`));
        console.log(line('----------------------------------------------------------------------------'));
      });
    })
    .catch((err) => console.log(error(err)));
} else if (route && option === '--validate' && option2 === undefined) {
  mdLinks(route, option)
    .then((res) => {
      res.forEach((element, i) => {
        console.log(' ');
        console.log(unique(i += 1));
        console.log(data(`href: ${element.href}`));
        console.log(data(`text: ${element.text}`));
        console.log(data(`file: ${element.file}`));
        if (element.ok === 'Ok') {
          console.log(ok(`status: ${element.status}`));
          console.log(ok(`ok: ${element.ok}`));
        } else {
          console.log(error(`status: ${element.status}`));
          console.log(error(`ok: ${element.ok}`));
        }
        console.log('----------------------------------------------------------------------------');
      });
    })
    .catch((err) => console.log(error(err)));
} else if (route && option === '--stats' && option2 === undefined) {
  mdLinks(route)
    .then((res) => {
      const totalLinks = res.length;
      const hrefArray = res.map((obj) => obj.href);
      const uniqueLinks = hrefArray.filter((elem, index) => hrefArray.indexOf(elem) === index).length;
      console.log(data(`Total: ${totalLinks}`));
      console.log(unique(`Unique: ${uniqueLinks}`));
    })
    .catch((err) => console.log(error(err)));
} else if (route && option === '--stats' && option2 === '--validate') {
  mdLinks(route, option2)
    .then((res) => {
      const totalLinks = res.length;
      const hrefArray = res.map((obj) => obj.href);
      const uniqueLinks = hrefArray.filter((elem, index) => hrefArray.indexOf(elem) === index).length;
      const brokenLinks = res.filter((obj) => obj.ok === 'Fail').length;
      console.log(data(`Total: ${totalLinks}`));
      console.log(unique(`Unique: ${uniqueLinks}`));
      console.log(error(`Broken: ${brokenLinks}`));
    })
    .catch((err) => console.log(error(err)));
} else if (route && option === '--validate' && option2 === '--stats') {
  mdLinks(route, option)
    .then((res) => {
      const totalLinks = res.length;
      const hrefArray = res.map((obj) => obj.href);
      const uniqueLinks = hrefArray.filter((elem, index) => hrefArray.indexOf(elem) === index).length;
      const brokenLinks = res.filter((obj) => obj.ok === 'Fail').length;
      console.log(data(`Total: ${totalLinks}`));
      console.log(unique(`Unique: ${uniqueLinks}`));
      console.log(error(`Broken: ${brokenLinks}`));
    })
    .catch((err) => console.log(error(err)));
} else if (argv.includes('--help')) {
  console.log(unique(`

  md-links <ruta> [opcion]

  - <ruta>: la ruta del archivo que se desea evaluar
  - [opcion]: ingresar la opción selecionada

    * --validate -> el módulo hace una petición HTTP para averiguar si el
                    o los links funciona o no.

    * --stats -> entrega un texto con estadísticas básicas sobre los links.

    * --stats --validate o --validate --stats -> entrega un texto con estadisticas
                                                 de los links y cuanto de ellos estan rotos.
  `));
}
