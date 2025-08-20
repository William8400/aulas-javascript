'use strict;'

/* Loops ou estruturas de repetição 
São  comandos que, baseados em alguma condição lógica, são programados para executar ações repetidas vezes.

Comandos mais tradicionais: while (ENQUANTO) e for (PARA)

Normalmente, os loops são controlados através de uma variável contadora. Está variável é comunmente chamada de "i" , "j" , "k" ou qualquer outra letra se necessário.*/


console.log('Exemplo 1: WHILE (enquanto)');

let i = 1;
while (i <= 5) {

    console.log("Valor do i:" +i);
    i++; // incremento 
    // i = i + 1; 
}

console.log("\nExemplo 2: FOR (PARA)");

// for(inicialização da variável; condição; atualização)
for( let j = 1; j <= 10; j++  ){
    console.log(" J vale "+j);
}

console.log("\nExemplo 3: loop regressivo");

for( let k = 10; k >= 1; k--){
    console.log(" K vale " +k);
}

console.log("\nExemplo 4: loop e array");

const frutas = ["Banana", "maçã", "Pêra", "kiwi", "Abacate"];
// usando loop "for" tradicional
for( let f = 0; f < frutas.length; f++ ){
    console.log( frutas[f]);
}

console.log("\n------\n");


// Usando loop for/of "(exclusivo do JS)"
for(const fruta of frutas ){
    console.log(fruta);
}



