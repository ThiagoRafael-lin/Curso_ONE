alert("Boas Vindas ao jogo do número secreto");

let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute for diferente de nuemroSecreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //si chute for igual a numeroSecreto
    if (chute == numeroSecreto) {
        alert(`Isso ai !! Você descobriu o número secreto ${numeroSecreto}`)
        break
        //se não
    } else {
        //se chute for maior que numeroScreto
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
            //se não
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        //tentativas = tentativas + ';
        tentativas++;
    }
}

let palavraTentaivas = tentativas > 1 ? 'tentativas' : 'tentativa';