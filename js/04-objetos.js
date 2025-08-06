'use strict';

// Exemplo 1: objeto com dados de uma pessoa 
console.log("Exemplo 1\n ");
const pessoa = {
    nome: "William Hidalgo Donato", 
    idade: 21,
    cidade: "São Paulo",
    estado: "SP"
};

console.log(pessoa);


// acessamos as propriedades usando nomeDoObjeto.nomedaPropriedade
console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos`);

// Exemplo 2: Objeto com array
console.log("\nExemplo2\n");

const livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
};
console.log(livro);
console.log(livro.titulo);

// Para acessar algum dos volumes, primeiro passamos pela propriedade (volumes) usando 'ponto' e, chegando nela, usamos os 'colchetes' com índice pois se trata de um array.
console.log(`Meu livro preferido é ${livro.volumes[1]}`);

// Exemplo 3: array de objetos 
console.log("\nExemplo 3\n");
const livros = [
    {
        titulo: " O Assassinato no Expresso do Oriente",
        autor: "Agatha Christie"
    },
    {
        titulo: "Crepúsculo",
        autor: "Stephanie Myers"
    },
    {
        titulo: "Harry Potter e a pedra filosofal",
        autor: "J.K. Rowling"
    }

]

console.log(livros);

console.log(livros[2].titulo);


/* Exercícios

1. Crie um objeto chamado "aluno" contendo os seguintes dados:

- Nome Completo
- Data de Nascimento
- (Use ARRAY) Lista de telefones (fixo e celular)
- (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente):
  - rua
  - número
  - bairro

2. Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */


console.log("\natividade\n ");

const aluno = {

    nome: "William",
    Data: "24/1/2004",
    telefone: [
        "(11)99769-7132",
        "(11)99896-3245"
    ],
    endereco: {
        rua: "Rua Rosário Do Sul",
        numero: "313",
        bairro: "Jardim Maringá" 
    }  
};

console.log(aluno);
console.log(`Meu nome é ${aluno.nome}, meu telefone é ${aluno.telefone[0]} e o bairro que eu moro é ${aluno.endereco.bairro}`);








