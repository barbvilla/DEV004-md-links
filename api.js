/* eslint-disable no-shadow */
/* eslint-disable array-bracket-spacing */
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
    // Dividir texto por lineas
    const fileSplit = result.split('\n');
    /* console.log(fileSplit); */
    const linksArray = [];
    fileSplit.forEach((element) => {
      // Regex obtención del texto
      const regexText = /\[(.*?)\]/g;
      // Regex para obtener links
      const regexLinks = /https:\/\/[^\s)]+/g;
      // Guarda el texto y link en un objeto
      const linkAndText = {
        text: element.match(regexText),
        href: element.match(regexLinks),
        file: pathAbsolute(pathFile),
      };
      linksArray.push(linkAndText);
    });
    // Eliminmar objetos null
    function deleteNullElement(obj) {
      if (obj.text !== null) {
        return obj;
      }
      return obj.delete;
    }
    const linksWithoutNull = linksArray.filter(deleteNullElement);
    /* console.log(linksWithoutNull); */
    // Retorna arreglo sin objetos null
    return linksWithoutNull;
  })
  .catch((error) => {
    console.log(error);
    return ('No contiene Links');
  });
/* fileReadAndGetLinks(pathFile).then((data) => console.table(data)); */

// Obtener Status Code
export const getStatusCodeLinks = (linksArray) => {
  const promisesArray = linksArray.map((obj) => axios.get(obj.href));
  Promise.allSettled(promisesArray)
    .then((result) => result.forEach((promise) => {
      if (promise.status === 'fulfilled') {
        console.log('Status: ', promise.value.status);
      } else if (promise.status === 'rejected') {
        console.log('Status: ', promise.reason.response.status);
      }
    }));
};

getStatusCodeLinks([
  {
    text: [ '[Diferencia entre array y objetos]' ],
    href: [ 'https://youtu.be/mJJloQY7A8Y' ],
    file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
  },
  {
    text: [ '[¿Cómo agrego una nueva propiedad a un objeto?]' ],
    href: [ 'https://youtu.be/mJJloQY7A8Y?t=236' ],
    file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
  },
  {
    text: [ '[¿Cómo puedo recorrer un objeto?]' ],
    href: [ 'https://youtube.com/01RHn23Bn_0' ],
    file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
  }]);
