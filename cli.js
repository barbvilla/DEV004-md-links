import { mdLinks } from './index.js';

mdLinks('./pruebas/').then(() => {})
  .catch((error) => {
    console.log(error);
  });

mdLinks('./noexiste/').then(() => {})
  .catch((error) => {
    console.log(error);
  });
