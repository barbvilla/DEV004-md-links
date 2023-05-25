import { mdLinks } from '../index.js';

describe('mdLinks', () => {
  it('debería devolver una promesa', () => {
    const res = mdLinks('./pruebas/1.md');
    expect(res instanceof Promise).toBe(true);
  });

  it('', () => {

  });
});
