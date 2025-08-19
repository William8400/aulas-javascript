'use strict';

// Comando Condicionais mais comuns : 
// if  -> SE 
// else  -> SENÃO

console.log("Exemplo 1");


let numero = 50;

// Condicional SIMPLES (usa apenas if) 

if (numero >= 10) {

    console.log("Se vc está está vendo esta lendo essa mensagem é porque a condição é VERDADEIRA!");
}

console.log("\nExemplo 2");

let aluno = "James white Jason";
let idade = 35;

/* Lógica: verificar se o aluno é maior ou menor de idade.*/

// Condicional COMPOSTA (if/else)

if (idade < 18) {
    console.log("Você é menor de idade!");

} else {
    console.log("Você é maior de idade!");

}

/* 1. Crie duas variáveis conforme a seguir:
 
- Nota 1 (contendo um valor de 0 a 10)
- Nota 2 (contendo outro valor de 0 a 10)

2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.
 
3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
Caso contrário, mostre "reprovado */

let nota1 = 8;
let nota2 = 6;
let media = (nota1+nota2)/2 

if(media >= 7){
    
    console.log("aprovado");
} else {
    console.log("reprovado");
}



