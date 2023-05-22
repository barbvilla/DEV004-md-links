/* eslint-disable array-bracket-spacing */
import {
  fileReadAndGetLinks,
  isPathAbsolute, onlyMD, pathAbsolute, routeExist, validateLinks,
} from '../api.js';

describe('Ruta existe', () => {
  it('deberia devolver que la ruta existe', () => {
    const result = routeExist('./pruebas/1.md');
    expect(result).toBe(true);
  });

  it('debería devolver que la ruta NO existe', () => {
    const result = routeExist('./noexiste');
    expect(result).toBe(false);
  });
});

describe('Es ruta absoluta', () => {
  it('Deberia debolver que la ruta es obsoluta', () => {
    const result = isPathAbsolute('/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md');
    expect(result).toBe(true);
  });

  it('Deberia debolver que la ruta NO es obsoluta', () => {
    const result = isPathAbsolute('./pruebas/1.md');
    expect(result).toBe(false);
  });
});

describe('Convertir en ruta absoluta', () => {
  it('La ruta se convierete en absoluta', () => {
    const result = pathAbsolute('./pruebas/1.md');
    const expected = '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md';
    expect(result).toBe(expected);
  });
});

describe('extensión .MD', () => {
  it('Es un archivo .MD', () => {
    const result = onlyMD('./pruebas/1.md');
    expect(result).toBe(true);
  });

  it('NO es un archivo .MD', () => {
    const result = onlyMD('./pruebas/4.js');
    expect(result).toBe(false);
  });
});

describe('Leer archivo y extrae links', () => {
  it('Lee el archivo y extrae los links con su text', () => {
    const response = fileReadAndGetLinks('./pruebas/1.md');
    const expected = [
      {
        href: [ 'https://youtu.be/mJJloQY7A8Y' ],
        text: [ '[Diferencia entre array y objetos]' ],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
      {
        href: [ 'https://youtu.be/mJJloQY7A8Y?t=236' ],
        text: [ '[¿Cómo agrego una nueva propiedad a un objeto?]' ],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
      {
        href: [ 'https://youtube.com/01RHn23Bn_0' ],
        text: [ '[¿Cómo puedo recorrer un objeto?]' ],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
      {
        href: [ 'https://youtu.be/bUl1R2lQvKo' ],
        text: [ '[map, filter, sort y reduce también son métodos para objetos]' ],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
      {
        href: [ 'https://youtu.be/wlukoWco2zk' ],
        text: [ '[Diferencia entre expression y statements]' ],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
      {
        href: [
          'https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml-vs-createelement/',
        ],
        text: [ '[Diferencia entre createElement e innerHTML]' ],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
      {
        href: [ 'https://youtu.be/s-7C09ymzK8' ],
        text: [ '[¿Qué es el Scope?]' ],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
      {
        href: [
          'https://www.youtube.com/watch?v=F1EoBbvhaqU&list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV',
        ],
        text: [
          '[Para estas preguntas sobre Git recomendamos ver este playlist]',
        ],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
    ];
    return response.then((result) => { expect(result).toEqual(expected); });
  });

  it('Lee archivo pero NO contiene links', () => {
    const response = fileReadAndGetLinks('./pruebas/5.md');
    return response.catch((result) => { expect(result).toEqual('No contiene links'); });
  });
});

describe('validate links', () => {
  it('', () => {
    const response = validateLinks([
      { href: ['https://youtu.be/mJJloQY7A8Y'] },
      { href: ['https://youtu.be/mJJloQY7A8Y?t=236'] },
      { href: ['https://youtube.com/01RHn23Bn_0'] },
    ]);
    const expected = [
      { Status: 200, Ok: 'Ok' },
      { Status: 200, Ok: 'Ok' },
      { Status: 404, Ok: 'Fail' },
    ];
    return response.then((result) => { expect(result).toEqual(expected); });
  });
});
