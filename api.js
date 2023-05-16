/* eslint-disable no-console */
/* eslint-disable max-len */
import * as fs from 'node:fs';
import path from 'path';
import axios from 'axios';

const pathFile = './pruebas/1.md';

// Ruta exite?
export const routeExist = (filePath) => fs.existsSync(filePath);
/* console.log(routeExist(pathFile)); */

// Es ruta absoluta?
export const isPathAbsolute = (filePath) => path.isAbsolute(filePath);
/* console.log(isPathAbsolute(pathFile)); */

// Transformar en ruta absoluta
export const pathAbsolute = (filePath) => path.resolve(filePath);
/* console.log(pathAbsolute(pathFile)); */

// Es un directorio?
/* export const pathIsDirectory = (filePath) => fs.lstatSync(filePath).isDirectory();
console.log('isDirectory', pathIsDirectory(pathFile)); */

// Leer directorio y extraer archivos MD
/* const readDirectory = (filePath) => fs.readdirSync(filePath);
console.log('readDir', readDirectory(pathFile)); */

export const onlyMD = (filePath) => path.extname(filePath) === '.md';
/* console.log('onlyMD', onlyMD(pathFile)); */

// Leer archivo y obtener links
export const fileReadAndGetLinks = (filePath) => fs.promises.readFile(filePath, 'utf-8')
  .then((result) => {
    /* console.log('result', result); */
    const fileSplit = result.split('\n');
    /* console.log(fileSplit); */
    const linksArray = [];
    fileSplit.forEach((element) => {
      const regexText = /\[(.*?)\]/g;
      const regexLinks = /https:\/\/[^\s)]+/g;
      const resultado = {
        text: element.match(regexText),
        href: element.match(regexLinks),
      };
      linksArray.push(resultado);
    });
    function deleteNullElement(obj) {
      if (obj.text !== null) {
        return obj;
      }
      return obj.delete;
    }
    const linksWithoutNull = linksArray.filter(deleteNullElement);
    /* console.table(linksWithoutNull); */
    return linksWithoutNull;
  })
  .catch((error) => {
    console.log(error);
    return ('No contiene Links');
  });
fileReadAndGetLinks(pathFile);

// Obtener Status Code

const getStatusCodeLinks = (urls) => {
  axios.get(urls)
    .then((response) => {
      console.log('Status Code: ', response.status);
      console.log('Ok: ', response.statusText);
    })
    .catch((error) => {
      console.log(error.status);
      console.log(error.statusText);
    });
};
getStatusCodeLinks('https://www.google.cl');
