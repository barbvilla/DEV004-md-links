import { mdLinks } from '../index.js';

describe('mdLinks', () => {
  it('debería devolver una promesa', () => {
    const res = mdLinks('./pruebas/1.md');
    expect(res instanceof Promise).toBe(true);
  });

  it('debería devolver un array de objetos con los elementos del archivo MD', () => {
    const res = mdLinks('./pruebas/1.md');
    const expected = [
      {
        href: ['https://youtu.be/mJJloQY7A8Y'],
        text: ['[Diferencia entre array y objetos]'],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
      {
        href: ['https://youtu.be/mJJloQY7A8Y?t=236'],
        text: ['[¿Cómo agrego una nueva propiedad a un objeto?]'],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
      {
        href: ['https://youtube.com/01RHn23Bn_0'],
        text: ['[¿Cómo puedo recorrer un objeto?]'],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
      {
        href: ['https://youtu.be/bUl1R2lQvKo'],
        text: ['[map, filter, sort y reduce también son métodos para objetos]'],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
      {
        href: ['https://youtu.be/wlukoWco2zk'],
        text: ['[Diferencia entre expression y statements]'],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
      {
        href: [
          'https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml-vs-createelement/',
        ],
        text: ['[Diferencia entre createElement e innerHTML]'],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
      },
      {
        href: ['https://youtu.be/s-7C09ymzK8'],
        text: ['[¿Qué es el Scope?]'],
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
    return res.then((result) => { expect(result).toEqual(expected); });
  });

  it('debería devolver un array de objetos con los elementos con status del archivo MD', () => {
    const res = mdLinks('./pruebas/1.md', '--validate');
    const expected = [
      {
        text: ['[Diferencia entre array y objetos]'],
        href: ['https://youtu.be/mJJloQY7A8Y'],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
        status: 200,
        ok: 'Ok',
      },
      {
        text: ['[¿Cómo agrego una nueva propiedad a un objeto?]'],
        href: ['https://youtu.be/mJJloQY7A8Y?t=236'],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
        status: 200,
        ok: 'Ok',
      },
      {
        text: ['[¿Cómo puedo recorrer un objeto?]'],
        href: ['https://youtube.com/01RHn23Bn_0'],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
        status: 404,
        ok: 'Fail',
      },
      {
        text: ['[map, filter, sort y reduce también son métodos para objetos]'],
        href: ['https://youtu.be/bUl1R2lQvKo'],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
        status: 200,
        ok: 'Ok',
      },
      {
        text: ['[Diferencia entre expression y statements]'],
        href: ['https://youtu.be/wlukoWco2zk'],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
        status: 200,
        ok: 'Ok',
      },
      {
        text: ['[Diferencia entre createElement e innerHTML]'],
        href: [
          'https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml-vs-createelement/',
        ],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
        status: 200,
        ok: 'Ok',
      },
      {
        text: ['[¿Qué es el Scope?]'],
        href: ['https://youtu.be/s-7C09ymzK8'],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
        status: 200,
        ok: 'Ok',
      },
      {
        text: [
          '[Para estas preguntas sobre Git recomendamos ver este playlist]',
        ],
        href: [
          'https://www.youtube.com/watch?v=F1EoBbvhaqU&list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV',
        ],
        file: '/Users/barbvilla/Desktop/Laboratoria/md-links/DEV004-md-links/pruebas/1.md',
        status: 200,
        ok: 'Ok',
      },
    ];
    return res.then((result) => { expect(result).toEqual(expected); });
  });

  it('debería devolver que la ruta NO existe', () => {
    const res = mdLinks('./pruebas/hola.md');
    return res.catch((result) => { expect(result).toEqual('La ruta no existe'); });
  });

  it('debería devolver que NO es un archivo MD', () => {
    const res = mdLinks('pruebas/4.js');
    return res.catch((result) => { expect(result).toEqual('No es un archivo .MD'); });
  });
});
