/*document = entrar no HTML, querySelector busca um elemento do HTML,
('h1) = indica o elemento que você quer manipular*/
// let titulo = document.querySelector('h1');
// //chama a variavel .innerHTML = é usado para colocar o valor
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";



let numeroSecreto = gerarNumeroAleatorio();

function exbirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    CSSMathProduct.innerHTML = texto;
}

exbirTextoNaTela("tag", "Jogo do número secreto"),
exbirTextoNaTela("p", "Escolha um número entre 1 e 10")

function verificarChute() {
    let chute = document.querySelector('input').value
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}


