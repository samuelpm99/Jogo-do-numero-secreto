let listaDeNumerosSorteados = [];
let limiteDePossibilidades = 10;
let numeroSecreto = numeroAleatorio();
let tentativas= 1;
function palavras(tag,texto){
let elementos = document.querySelector(tag);
elementos.innerHTML = texto; 

}
function mensagemInicial() {
    palavras('h1','Jogo do número secreto');
    palavras('p','Escolha um número entre 1 e 10');
}


mensagemInicial()

function limparInput(){
    chute = document.querySelector('input');
    chute.value = '';

}

function verificarChute() {
   
    let chute= document.querySelector('input').value;
    let palavraTentativa = tentativas == 1 ? 'Tentativa' : 'Tentativas';
    let quantidadesNumero = listaDeNumerosSorteados.length;  
    if(quantidadesNumero == limiteDePossibilidades){
        listaDeNumerosSorteados=[];
    }

    if (numeroSecreto == chute) {
           palavras('h1', "Acertou!" );
           palavras('p', `Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
           document.getElementById('reiniciar').removeAttribute('disabled');
        }  else if(chute > numeroSecreto) {
            palavras('p','tente mais uma vez, o número secreto é menor!');
         } else {
        palavras('p', 'Tente mais uma vez, o número secreto é maior!');
        } 
    tentativas++
    limparInput();
}
function numeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * limiteDePossibilidades + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);

        return numeroEscolhido;
    }
} 

function reiniciarPartida(){
  numeroSecreto = numeroAleatorio();
  mensagemInicial();
  tentativas=1
  document.getElementById('reiniciar').setAttribute('disabled', true); 
}


