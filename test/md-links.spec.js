/* eslint-disable no-undef */
import { mdLinks } from '../index.js';

describe('mdLinks', () => {
  it('debería devolver una promesa', () => {
    const res = mdLinks('./pruebas/1.md');
    expect(res instanceof Promise).toBe(true);
  });

  it('deberia devolver que la ruta existe', () => {
    const res = mdLinks('./pruebas/1.md');
    return res.then((result) => { expect(result).toEqual('éxito'); });
  });

  it('debería devolver que la ruta no existe', () => {
    const res = mdLinks('./noexiste');
    return expect(res).rejects.toEqual('La ruta no existe');
    // return res.catch((result) => { expect(result).toEqual('La ruta no existe'); });
  });
});
