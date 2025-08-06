'use strict';

// Declarando um array (vetor)
let vocalistas = ["Coldplay", "Guns N Roses" , "Arctic Monkes" , "Mamonas Assassinas"];

// se quisermos visualizar a estrutura do array inteiro:
// console.log(vocalistas);

// Acessando um determinado elemento através do índice 
console.log(vocalistas[3]);

// O Coldplay está em trunê tocando paradise
console.log(`O ${vocalistas[3]} está em turnê tocando " Robocop Gay ".`);

// Relembrando como criar/usar arrays (vetor)
// No JS , vc pode colococar qualquer coisa em um array  

let seila = 6;
const coisas = [10, "Senac", "<h2> Oie </h2>", seila, 15.88];

console.log(coisas[1]);
console.log(coisas[4]);

/* Exercícios (Faça aqui mesmo)*/

// 1) Crie um array contendo o nome de 7 coisas que vc gosta (exemplos: artistas , músicas , livros , comida...)
let coisasquegosto = ["tocar Guitarra" , "Andar de Bike" , "Jogar Video Game" , "Treinar Musculação" , "Natuereza" , "Animais" , "Fazer Códigos"]

// 2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo elemento do array. Use concatenação e/ou template string.
console.log(coisasquegosto.length);

console.log(`Eu gosto de ${coisasquegosto[2-1]} quando tenho tempo livre`);

console.log(`Eu gosto de ver ${coisasquegosto[4]}`);

console.log(`Eu gosto de ${coisasquegosto[6]} no curso de Desenvolvedor Full Stack que é localizado no Senac Penha`);









