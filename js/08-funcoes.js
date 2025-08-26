'use strict';

/* Sobre funções
Funções são blocos de códigos responsáveis por executar determinadas tarefas para usar estes blocos/funções, é necessário "chamar/invocar" a função desejada através do seu nome.

Vantasgens ao usar funções:
- Reutilização de código
- Organização de código-fonte, permitido a separação de diferentes lógicas e responsabilidades
- Performace melhor 
- Maior facilidade para manutenções

No JavaScript, existem várias maneiras de se criar uma função: função anônima, função nomeada/declarada e arrow
function.

*/

console.log('Exemplo 1');

const exemplo1 = function () {

    // corpo da função: ação que a função vai fazer
    console.log('Olá Função Anônima!');


};

// Chamado/invocando a função
exemplo1();

console.log('\nExemplo 2: Função Nomeada/Declarada');
function exemplo2() {
    console.log('Esta é uma função nomeada!');
}

exemplo2();

console.log('\nExemplo 3: Arrow Funcion (Função Flecha/Seta)');

/* Sintaxe potencialmente mais simples para funções no JavaScript */
const exemplo3 = () => {
    console.log('Sintaxe Arrow Function!');

};

exemplo3();

/* Obs: funções (em qualquer sintaxe) também podem trabalhar com parâmentros/argumentos.

Quando uma função precisa de valores/dados para algum tipo de processamento, ela recebe valores/dados através de parâmetros/argumentos entre os parênteses 

Geralmente, ao terminar o processamento dos dado, a função 'retorna' para fora um  resultado.

*/
console.log("\nExemplo 4: Função com parâmetro opcional");

function saudacao(nome = " Visitante") {
    console.log('Olá,' + nome);

}

saudacao(" William ");
saudacao(" Rogério ");
saudacao(" Augusto ");
saudacao(); // nesse caso, é usado "Visitante" como valor

console.log("\nExemplo 5: função com parâmetros e retorno");

/* Sempre que tivermos a necessidade de  trabalhar com o resultado do processamento de uma função, então essa função deve ter o return */
function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

// Chamamos a função e recebemos o retorno/resultado dela 
let resultado1 = multiplicar(10, 5);
let resultado2 = multiplicar(200, 10);

// Exibinmos o resultado
console.log("Resultado 1: " + resultado1);
console.log("Resultado 2: " + resultado2);


console.log("\nExemplo 6: Simplificamos com Arrow Function");
// Versão 1: Sintaxe declarada/nomeada
/*function somar(valor1 , valor2) {
    return valor1 + valor2;
}*/

// Versão 2: Sintaxe Arrow Function com retorno implícito
const somar = (valor1, valor2) => valor1 + valor2;




console.log(somar(150, 500));



console.log('\nExemplo 7: Formatando valor monetário');
let preco = 5000;
let desconto = preco * 0.10; // 10%
let precoFinal = preco - desconto;

function formatarMoeda(valor) {
   return new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(valor);
}

console.log("Preço original:" + formatarMoeda(preco));
console.log("Desconto:" + formatarMoeda(desconto));
console.log("Preço Final:" + formatarMoeda(precoFinal));

// Exemplo: usando recursos da classe Intl (Internacionalização) 

const exemplo = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
}).format(preco);
console.log(exemplo);




