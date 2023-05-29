/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
import {
  fileReadAndGetLinks, isPathAbsolute, onlyMD, pathAbsolute, routeExist, validateLinks,
} from './api.js';

export const mdLinks = (filePath, options) => new Promise((resolve, reject) => {
  // Identificar si la ruta existe
  if (routeExist(filePath)) {
    // Identificar si es una ruta absoluta
    if (!isPathAbsolute(filePath)) {
      // Si es relativa transformar a ruta absoluta
      const absolutePath = pathAbsolute(filePath);
      // Identificar si es un archivo MD
      if (onlyMD(filePath)) {
        // Identificar y capturar los links en el archivo
        fileReadAndGetLinks(absolutePath)
          .then((res) => {
            if (options === '--validate') {
              const validateLinksMD = validateLinks(res);
              resolve(validateLinksMD);
            } else {
              resolve(res);
            }
          });
      } else {
        reject('No es un archivo .MD');
      }
      // PENDIENTE! Identificar si es un directorio => devolver arreglo con los archivos MD
    }
  } else {
    // si la ruta no existe se rechaza la promesa
    reject('La ruta no existe');
  }
});

/* mdLinks(process.argv[2])
  .then((res) => console.table(res))
  .catch((err) => console.log(err)); */
