/* eslint-disable no-console */
/* eslint-disable max-len */
import * as fs from 'node:fs';
import path from 'path';

const pathFile = './pruebas/';

// Ruta exite?
const routeExist = (filePath) => fs.existsSync(filePath);
console.log(routeExist(pathFile));

// Transformar en ruta absoluta
const pathAbsolute = (filePath) => path.resolve(filePath);
console.log(pathAbsolute(pathFile));

// Es un directorio?
const pathIsDirectory = (filePath) => fs.lstatSync(filePath).isDirectory();
console.log('isDirectory', pathIsDirectory(pathFile));

// Leer directorio y extraer archivos MD
const readDirectory = (filePath) => fs.readdirSync(filePath);
console.log('readDir', readDirectory(pathFile));

const onlyMD = (filePath) => path.extname(filePath) === '.md';
console.log('onlyMD', onlyMD(pathFile));

// Verificar los links
const fileRead = () => fs.readFile('', 'utf-8', (error, file) => {
  if (!error) {
    console.log(file);
  } else {
    console.log(error);
  }
});
console.log('fileRead', fileRead);

export {
  routeExist,
  pathAbsolute,
};
