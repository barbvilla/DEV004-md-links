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
export const fileReadAndGetLinks = (filePath) => (fs.promises.readFile(filePath, 'utf-8')
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
        href: element.match(regexLinks),
        text: element.match(regexText),
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
  })
);
/* fileReadAndGetLinks(pathFile).then((data) => console.log(data)); */

// Obtener Status Code
export const validateLinks = (linksArray) => {
  const promisesArray = linksArray.map((obj) => axios.get(obj.href));
  return Promise.allSettled(promisesArray)
    .then((result) => {
      const validateLink = [];
      result.forEach((promise, i) => {
        if (promise.status === 'fulfilled') {
          validateLink.push({
            href: linksArray[i].href,
            text: linksArray[i].text,
            file: linksArray[i].file,
            status: promise.value.status,
            ok: 'Ok',
          });
        } else if (promise.status === 'rejected') {
          validateLink.push({
            href: linksArray[i].href,
            text: linksArray[i].text,
            file: linksArray[i].file,
            status: promise.reason.response.status,
            ok: 'Fail',
          });
        }
      });
      /* console.table(validateLink); */
      return validateLink;
    });
};
/* validateLinks([
  {
    text: '[Diferencia entre array y objetos]',
    href: 'https://youtu.be/mJJloQY7A8Y',
    file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
  },
  {
    text: '[¿Cómo agrego una nueva propiedad a un objeto?]',
    href: 'https://youtu.be/mJJloQY7A8Y?t=236',
    file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
  },
  {
    text: '[¿Cómo puedo recorrer un objeto?]',
    href: 'https://youtube.com/01RHn23Bn_0',
    file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
  },
]); */
