'use strict;'

/* Loops ou estruturas de repetição 
São  comandos que, baseados em alguma condição lógica, são programados para executar ações repetidas vezes.

Comandos mais tradicionais: while (ENQUANTO) e for (PARA)

Normalmente, os loops são controlados através de uma variável contadora. Está variável é comunmente chamada de "i" , "j" , "k" ou qualquer outra letra se necessário.*/


console.log('Exemplo 1: WHILE (enquanto)');

let i = 1;
while (i <= 5) {

    console.log("Valor do i:" + i);
    i++; // incremento 
    // i = i + 1; 
}

console.log("\nExemplo 2: FOR (PARA)");

// for(inicialização da variável; condição; atualização)
for (let j = 1; j <= 10; j++) {
    console.log(" J vale " + j);
}

console.log("\nExemplo 3: loop regressivo");

for (let k = 10; k >= 1; k--) {
    console.log(" K vale " + k);
}

console.log("\nExemplo 4: loop e array");

const frutas = ["Banana", "maçã", "Pêra", "kiwi", "Abacate"];
// usando loop "for" tradicional
for (let f = 0; f < frutas.length; f++) {
    console.log(frutas[f]);
}

console.log("\n------\n");


// Usando loop for/of "(exclusivo do JS)"
// Usamos uma var/const (no caso , fruta) para acessar cada elemento do array (no caso, bandas) 
for (const fruta of frutas) {
    console.log(fruta);
}

console.log("\nExemplo 5: loop e objeto");
const pessoa = {
    nome: "Fulano tal",
    idade: 50,
    cidade: "São Paulo",
    estado: "SP"
};

// Usando loop for/in para objetos (exclusivo par JS)

for (const dados in pessoa) {
    console.log(pessoa[dados]);
}

// 1. Faça um array chamado "clientes" contendo 3 objetos.

const clientes = [
    {
        indentificador: 1,
        nome: "Dio"
    },

    {
        indentificador: 2,
        nome: "Ozzy"
    },

    {
        indentificador: 3,
        nome: "Ian"
    }
]

for (const cliente of clientes) {
    console.log("- Cliente:" + cliente.nome + ", id:" + cliente.indentificador);
}

for (let b = 0; b < clientes.length; b++) {
    console.log("- Cliente:" + clientes[2].nome + ",id:" + clientes[2].indentificador);
}

/* Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Dio", "Ozzy" e "Ian").
 
2. Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
 
- Cliente: Dio, id: 1
- Cliente: Ozzy, id: 2
- Cliente: Ian, id: 3 */








