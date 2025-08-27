'use strict;'

/* Exemplo 1  */

// Procurando (querySelector) por um elemento chamado exemplo1 
const exemplo01 = document.querySelector("#exemplo1");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");

console.log(exemplo01);
console.log(mensagem01);
console.log(pagina);

/* Para Selecionar vários elemento, use querySelectorAll.
O Resultado é uma espécie de array de elementos (Nodelist).*/
const paragrafo = document.querySelectorAll("p")
console.log(paragrafo);



