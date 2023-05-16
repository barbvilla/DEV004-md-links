/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */

import {
  fileReadAndGetLinks, isPathAbsolute, onlyMD, pathAbsolute, routeExist,
} from './api.js';

export const mdLinks = (filePath, options) => new Promise((resolve, reject) => {
  // Identificar si la ruta existe
  if (routeExist(filePath)) {
    /* Console.log('La ruta existe'); */
    // Identificar si es una ruta absoluta
    if (!isPathAbsolute(filePath)) {
      // Si es relativa transformar a ruta absoluta
      const absolutePath = pathAbsolute(filePath);
      /* console.log(pathAbsolute); */
      // Identificar si es un archivo MD
      if (onlyMD(filePath)) {
        // Identificar y capturar los links en el archivo
        resolve(fileReadAndGetLinks(absolutePath));
      } else {
        reject('No es un archivos .MD');
      }
      // Identificar si es un directorio => devolver arreglo con los archivos MD
      resolve('éxito');
    }
  } else {
    // si la ruta no existe se rechaza la promesa
    reject('La ruta no existe');
  }
});
