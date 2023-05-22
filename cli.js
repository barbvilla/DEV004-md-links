/* eslint-disable no-console */
import { argv } from 'node:process';
/* import { mdLinks } from './index.js'; */

const isValidate = argv.includes('--validate');
const isStats = argv.includes('--stats');

/* mdLinks('./pruebas/1.md').then(() => {})
  .catch((error) => {
    console.log(error);
  });

mdLinks('./noexiste/').then(() => {})
  .catch((error) => {
    console.log(error);
  });
 */
