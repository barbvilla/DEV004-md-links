#!/usr/bin/env node
/* eslint-disable max-len */

/* eslint-disable no-console */
import { mdLinks } from './index.js';

const route = process.argv[2];
const option = process.argv[3];
const option2 = process.argv[4];

if (route && option === undefined) {
  mdLinks(route)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
} else if (route && option === '--validate' && option2 === undefined) {
  mdLinks(route, option)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
} else if (route && option === '--stats' && option2 === undefined) {
  mdLinks(route)
    .then((res) => {
      const totalLinks = res.length;
      const hrefArray = res.map((obj) => obj.href);
      const uniqueLinks = hrefArray.filter((elem, index) => hrefArray.indexOf(elem) === index).length;
      console.log(`Total: ${totalLinks}`);
      console.log(`Unique: ${uniqueLinks}`);
    });
} else if (route && option === '--stats' && option2 === '--validate') {
  mdLinks(route, option2)
    .then((res) => {
      const totalLinks = res.length;
      const hrefArray = res.map((obj) => obj.href);
      const uniqueLinks = hrefArray.filter((elem, index) => hrefArray.indexOf(elem) === index).length;
      const brokenLinks = res.filter((obj) => obj.ok === 'Fail').length;
      console.log(`Total: ${totalLinks}`);
      console.log(`Unique: ${uniqueLinks}`);
      console.log(`Broken: ${brokenLinks}`);
    });
} else if (route && option === '--validate' && option2 === '--stats') {
  mdLinks(route, option)
    .then((res) => {
      const totalLinks = res.length;
      const hrefArray = res.map((obj) => obj.href);
      const uniqueLinks = hrefArray.filter((elem, index) => hrefArray.indexOf(elem) === index).length;
      const brokenLinks = res.filter((obj) => obj.ok === 'Fail').length;
      console.log(`Total: ${totalLinks}`);
      console.log(`Unique: ${uniqueLinks}`);
      console.log(`Broken: ${brokenLinks}`);
    })
    .catch((err) => console.log(err));
}
