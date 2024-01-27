let numeroSecreto = GerarNumeroAleatorio();

function exibirTextoNaTela(tag,texo) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texo;
}
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número de 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function GerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 +1);
}