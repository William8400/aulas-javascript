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

const exemplo1 = function() {

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

function saudacao( nome = " Visitante" ){
    console.log('Olá,' +nome);
    
}

saudacao(" William ");
saudacao(" Rogério ");
saudacao(" Augusto ");
saudacao(); // nesse caso, é usado "Visitante" como valor