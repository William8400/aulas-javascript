'use strict;'

/* Exemplo 1  */

// Procurando (querySelector) por um elemento chamado exemplo1 
const exemplo01 = document.querySelector("#exemplo1");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");



/* Para Selecionar vários elemento, use querySelectorAll.
O Resultado é uma espécie de array de elementos (Nodelist).*/
const paragrafo = document.querySelectorAll("p")
console.log(paragrafo);

/* Sobre Eventos
Um evento é um acontecimento ou fenômeno que, quando acontece, dispara ações em nosso programa/site/aplicação.

O JavaScript suporta centenas de tipos de evento. Exemplos: clique do mouse, pressionar teclas, tocar na tela, rolagem da página, carregamento da página e etc.*/

// Exemplo detectando eventos
// ao clicar 1x, adiciona um texto ao paragrafo de mensagem
exemplo01.addEventListener("click", function () {
    mensagem01.textContent = "Opa, Meu Nome é William!";

    // Adiciona a classe destaque (não coloque "." neste caso)
    mensagem01.classList.add("destaque");
});

// Ao clicar 2x, retira o texto do paragrafo de mensagem
mensagem01.addEventListener("dblclick", function () {
    mensagem01.textContent = "tenho 21 anos, e faço um curso (desenvolvedor FullStack) no Senac Penha";

    // Remove a classe destaque
    mensagem01.classList.remove("destaque");

});

const atividade = document.querySelector("h1");
const referencias = document.querySelector("#referencias")

atividade.addEventListener("mouseover", function(){
    atividade.textContent = "Praticando Eventos!"

    atividade.classList.add("atividade")
}); 

referencias.addEventListener("click", function (){
    atividade.textContent = "Eventos"
    atividade.classList = 'Eventos'
});






