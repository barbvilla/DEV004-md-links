/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
import * as fs from 'node:fs';
import path from 'path';

export const mdLinks = (filePath, options) => new Promise((resolve, reject) => {
  // Identificar si la ruta existe
  if (fs.existsSync(filePath)) {
    /* Console.log('La ruta existe'); */
    // Identificar si es una ruta absoluta
    if (!path.isAbsolute(filePath)) {
      // Si es relativa transformar a ruta absoluta
      const pathAbsolute = path.resolve(filePath);
      /* console.log(pathAbsolute); */
      // Identificar si es un directorio => devolver arreglo con los archivos MD
      // Identificar si es un archivo MD
      // Identificar y capturar los links en el archivo
      resolve('éxito');
    }
  } else {
    // si la ruta no existe se rechaza la promesa
    reject('La ruta no existe');
  }
});
