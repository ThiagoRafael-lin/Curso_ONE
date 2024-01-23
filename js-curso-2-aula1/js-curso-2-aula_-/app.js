/*document = entrar no HTML, querySelector busca um elemento do HTML,
('h1) = indica o elemento que você quer manipular*/
let titulo = document.querySelector('h1');
//chama a variavel .innerHTML = é usado para colocar o valor
titulo.innerHTML = "Jogo do número secreto";

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = "Escolha um número entre 1 e 10";

function verificarChute() {
    console.log("o botão foi clicado");
}