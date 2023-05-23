#!/usr/bin/env node

/* eslint-disable no-console */
import { argv } from 'node:process';
/* import { mdLinks } from './index.js'; */

const isValidate = argv.includes('--validate');
const isStats = argv.includes('--stats');

console.log(isValidate);
console.log(isStats);
