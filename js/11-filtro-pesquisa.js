'use strict';

const campoBusca = document.querySelector("#busca");
const pessoas = document.querySelectorAll("#pessoas li");


// Monitorando a digitação em tempo real dentro do campo de busca 
campoBusca.addEventListener("input", function () {
   // Capturando o que é digitado e transformando em letra minúscula  
   const termoDigitado = campoBusca.value.toLowerCase();
   
   // Acessando cada cliente dentro da lista de clientes 
   for ( const pessoa of pessoas) {

        // Se o nome do cliente incluir algum caractere digitado
        if (pessoa.textContent.toLowerCase().includes(termoDigitado)) {
            // Então mantemos o <li>  visível
            pessoa.style.display = "list-item";
        } else {
            // senão, escondemos o <li>
            pessoa.style.display = "none";
        }
   }
});
