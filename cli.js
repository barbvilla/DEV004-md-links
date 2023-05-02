import { mdLinks } from "./index.js";

mdLinks('./pruebas/1.md').then(() =>{})
.catch((error)=>{
    console.log(error)
});

mdLinks('/noexiste/').then(() =>{})
.catch((error)=>{
    console.log(error)
});