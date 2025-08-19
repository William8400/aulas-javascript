'use strict'

/* Operadores LÓGICOS 
&&  -> E            ->   (AND)
||  -> OU           ->   (OR)
!   -> NÃO/NEGAÇÃO  ->   (NOT)

// && -> retorna TRUE se TODAS as condições forem VERDADEIRAS 
*/

console.log('Exemplo &&');

let idade = 20;
let temCarta = true

// if(idade >=18 && temCarta === true){ // comparando explicitamente 
if (idade >= 18 && temCarta) { // Comparando implicitamente
    console.log('Pode dirigir');

} else {
    console.log('Não pode dirigir');

}

// Sobre duplo e triplo sinal de igual 
// Ao usar == a compração é somente do VALOR, ou seja, NÃO IMPORTA o tipo de dados (string , number , etc)

// - Ao usar === a comparação é DO VALOR E DO TIPO DE DADO, ou seja , IMPORTA TUDO. 
let a = 10
let b = '10'
// let resultadoComparacao = a === b; // TRUE 
let resultadoComparacao = a === b; // FALSE  

console.log(resultadoComparacao);


console.log('\nExemplo ||');
// || --> retorna VERDADEIRO se pelo menos uma das condições for VERDADEIRA 

let feriado = true;
let fimDeSemana = false;

//if (feriado === true || fimDeSemana === true) {
if (feriado || fimDeSemana) {
    console.log('Não tem aula!');
} else {
    console.log('tem aula!');
}


console.log('\nExemplo !');
// ! -> inverte a lógica. O que é TRUE, vira FALSE. O que é FALSE, vira TRUE.

// Não está vigorando (false)
let blackFriday = false;

// Aqui, ao usar ! (Negação), verificamos se a variável NÃO É TRUE. Ou seja, INVERTEMOS a lógica.

if (!blackFriday) {
    console.log('Preços normais');
    
} else {
    console.log('Preços com descontos...');
}






