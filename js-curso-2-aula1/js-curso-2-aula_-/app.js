/*document = entrar no HTML, querySelector busca um elemento do HTML,
('h1) = indica o elemento que você quer manipular*/
// let titulo = document.querySelector('h1');
// //chama a variavel .innerHTML = é usado para colocar o valor
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";



let numeroSecreto = gerarNumeroAleatorio();
let tentativas;

function exbirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exbirTextoNaTela("h1", "Jogo do número secreto"),
exbirTextoNaTela("p", "Escolha um número entre 1 e 10")

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exbirTextoNaTela('h1', 'Acertou !!');s
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto, com ${tentativas} ${palavraTentativa} tentativas !!`;
        exbirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('desabled')
    } else {
        if (chute > numeroSecreto) {
            exbirTextoNaTela('p', 'O número secreto é menor')
        } else {
            exbirTextoNaTela('p', 'O número secreto é maior')
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}


