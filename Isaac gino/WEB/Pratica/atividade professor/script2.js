// let contagem = 10;

// const intervalo = setInterval(function() {
//     console.log('tempo restante')

//     if (contagem === 0) {
//         console.log('!FOGO');
//         clearInterval(intervalo);
//     }else{
//         contagem--;
//     }
// } , 1000);
    
// let contador = 10;

// while (contador >= 0) {
//     console.log(contador)
//     contador --;  
// }
// console.log("!FOGO")
// clearInterval
// const umNumero = +prompt('digite um numero aqui')
// if (umNumero > 0){
//     console.log('conseguiu carai')
// }
// if(umNumero < 0) {
//     console.log('menor que zero serio')
// }
//  if(umNumero == 0){
//     console.log('zero e chato escolhe outro')
// }
// if(umNumero %2 == 0) {
//     console.log('seu numero e par')
// }else{console.log('seu numero e impar')
// }
const numeroSecreto = 7;
let palpite;

console.log("Iniciando o jogo de adivinhação");
console.log("tente adivinhar o número secreto entre 1 a 10");

do {
    palpite = +prompt("digite o numero")

if (palpite < numeroSecreto) {
    alert("muito baixo! tente novamente")
}else if( palpite > numeroSecreto) {
    alert("muito alto! tente novamente")
}
}while (palpite !== numeroSecreto);
alert('parabens voce adivinhou o número secreto{numeroSecreto}');