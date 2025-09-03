'use strict';

const campoSenha = document.querySelector("#senha");
const botaoMostrar = document.querySelector("#mostrar")

// "touchstart" para celular (pointerdown) para computador

/* Monitoramos o evento pointerdown pois ele funcionará tanto para o acionamneto com mouse no desktop quanto com o dedo em mobile */
botaoMostrar.addEventListener("pointerdown", function () {
   // ta "segurando o botão? Troca o type para text e mostra senha " 
   campoSenha.type = "text";
});

botaoMostrar.addEventListener("pointerup", function () {
    // Soltou o botão? Volta o type pra password e esconde a senha 
    campoSenha.type = "password";
})

// pointermove, pointerout, pointerleave
botaoMostrar.addEventListener("pointerout", function () {
    campoSenha.type = "password"
})