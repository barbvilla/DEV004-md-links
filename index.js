import * as fs from 'node:fs';

export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    // Identificar si la ruta existe
    if (fs.existsSync(path)){
      console.log('La ruta existe');      
      // Identificar si es una ruta absoluta
        // Si es relativa transformar a ruta absoluta
      // Identificar si es un archivo o directorio devolver arreglo con los archivos MD
         // Identificar si es un archivo MD
        // Identificar y capturar los links en el archivo
      resolve('exito')
    } else {
      // si la ruta no existe se rechaza la promesa
      reject('La ruta no existe');
    }

  });
};
