// VARIAVEIS - PT.1
// tipos de váriaveis que PODEM MUDAR DE VALOR
// var utilizada escopo global
// var

// let utilizada escopo local
// let

// váriavel que NÃO PODE MUDAR DE VALOR
// const


// tipos de dado:
// Number -> tipo para números
// String -> tipo para Textos, sempre entre 'texto' ou "texto"
// Boolean -> true ou false

// declaração de variaveis:
// = -> atribuição de valores
// constante do tipo String/texto:
// const meuNome = 'Leonardo';
// alert(meuNome)

// variavel do tipo Number/numero;
// let minhaIdade = 28;
// alert(minhaIdade);

// variavel do tipo Boolean/verdadeiro ou falso;
// let fumante = false;
// alert(fumante);

// reatribuição de valores (let -> valor variavel):
// fumante = true;
// alert(fumante);

// 1 -> declare uma let com o texto "ola mundo" chamada "mensagemInicial"
// 2 -> declare uma variavel que NÃO muda de valor chamada "dtNasc" que
// receberá a sua data de nascimento em forma de texto.

// 1
// let mensagemInicial = "ola mundo!"
// alert(mensagemInicial);

// 2
// const dtNasc = '19/06/1997';
// alert(dtNasc)




//OPERAÇÕES COM VARIAVEIS - PT.2
//operações com Number
// const primeiraIdade = '8';
// const segundaIdade = '2';

// const somaDasIdades = primeiraIdade + segundaIdade;
// console.log('aqui a soma', somaDasIdades);

// const subtracaoDasIdades = primeiraIdade - segundaIdade;
// console.log('aqui a subtracao', subtracaoDasIdades)

// const multiplicacaoDasIdades = primeiraIdade * segundaIdade;
// console.log(multiplicacaoDasIdades);

// const divisaoDasIdades = primeiraIdade / segundaIdade;
// alert(divisaoDasIdades)

// operações com String
// const profLeo = "Leonardo";
// const profMoises = "Moises";
// // o simbolo de "+" quando aplicado a texto, realiza a concatenação dos valores.
// const mensagemFinal = 'Ola ' + profLeo + ' e '  + profMoises + ' como vocês estão?'
// console.log(mensagemFinal)

//operação com Boolean
//== -> comparação
// console.log(2 == 2); //true
//!= -> diferença
//console.log(2 != 2); //false

//=== -> comparação de valores e TIPO (ESTRITAMENTE IGUAL);
// console.log(2 === '2') //false
// console.log(2 === 2) //true
// console.log('2' === '2') //true

//OPERAÇÕES MATEMÁTICAS COM VARIAVEIS - PT.3

//o computador segue as regras matematicas mult./divisão primeiro e dps soma/sub.
// const resultadoOperacao = 5+2*1+6/2;
// console.log(resultadoOperacao)

// const resultadoOperacaoDois = ((5 + 2) * (1 + 6) / 2)
// console.log(resultadoOperacaoDois)

//ESTRUTURA CONDICIONAL - PT.4 (if)
//IF - se

// if ('leo' != 'moises') {

//     if (2 != 3) {

//         console.log('segundo condicao traviscott')

//         if (4 == 4) {
//             console.log('terceira condição')
//         }
//     }

//     console.log('primeira condicao piterodatilo!!')
// }

//1
//verifique se 5 é ESTRITAMENTE igual a "5",
//se for, verifique se 2 e igual 2
//caso todos sejam satisfeito, mostre "todos iguais, Dougras!"

//2
//verifique se 'leao' é igual a 'leao',
//se for, verifique se 42 é igual a "42".
//caso todos sejam satisfeitos, mostre "leao e 42 iguais"

//1
// if(5 === "5") {
//     if(2 == 2) {
//         console.log('todos iguais, dougras!')
//     }
//     console.log('os cinco são iguais!')
// }

//2
// if('leao' === 'leao') {
//     if(42 == '42'){
//         console.log('leoa e 42 iguais!')
//     }
// }

// && -> e -> * (condições todas serem satisfeitas)
// 1*1*1*1*1*0 = 0

// || -> ou -> + (qualquer uma das condições ser satisfeita)
// 1+1+1+1+1+0 = 1

// if (2 === 2 && 2 === '2') {
//     console.log('entrei no if do E!')
// }

// if (2 === 2 || 2 === '2') {
//     console.log('entrei no if do OU!')
// }


// if ((2 === '2' && 5 == 5) || 2 === 2) {
//     console.log('entrei no 3 condicoes');
// }



//ESTRUTURA CONDICIONAL - PT.4 (if else)

// if (2 === 2 && 2 === '2') { //false
//     console.log('entrei no if do E!')
// }
// else { //se o if for false, entra no else
//     console.log('entrei no else!')
// }

// if (2 === 2 || 2 === '2') { //true
//     console.log('entrei no if do OU!')
// }
// else { //se if true, NÃO ENTRA NO ELSE
//     console.log('entrei no else!')
//}

// if ((2 === '2' && 5 == 5) || 2 === 2) { //true, faz o && primeiro, depois o || (&& -> *, || -> +)
//     console.log('entrei no 3 condicoes');
// }
//else { //se if true, NÃO ENTRA NO ELSE
//     console.log('entrei no else!')
// }


//ESTRUTURA CONDICIONAL - PT.5 (if else if)
//o else if pode ser colocado diversas vezes, mas o else apenas uma, pois ele
//e a negação do IF que está sendo validado, o else só pode se repetir se
//ele estivar em if-else aninhado.

// if (2 === 2 && 2 === '2') {
//     console.log('entrei no if do E!')
// }
// else if(5 === '5') {
//     console.log('entrei no else if!')
// }
// else {
//     console.log('nao entrei em nd')
// }

// if (2 === 2 || 2 === '2') {
//     console.log('entrei no if do OU!')
// }
// else if(3 != 4) {
//     console.log('entrei no else!')
// }

// if ((2 === '2' && 5 == 5) || 2 === 2) { //true, faz o && primeiro, depois o || (&& -> *, || -> +)
//     console.log('entrei no 3 condicoes');
// }
//else if(5 === 5) { //se if true, NÃO ENTRA NO ELSE
//     console.log('entrei no else!')
// }

//ESTRUTURA CONDICIONAL - PT.6 (switch-case)
// const minhaIdade = 5;
// switch (minhaIdade) {
//     case 10:
//         console.log('tem 10 anos');
//         break;
//     case 11:
//         console.log('tem 11 anos');
//         break;
//     case 28:
//         console.log('tem 28 anos!');
//         break;
//     default:
//         console.log('idade nao encontrada');
//         break;
// }

//considere os valores entre 1 e 5 para seu switch;
//caso o usuario digite algum desses valores(1 até 5), o sistema
//deve mostrar a mesma quantidade de vezes a palavra "dougras"
//se não, escrever "vacilou dougras"


// const num = 4;
// switch (num) {
//     case 1:
//         console.log('dougras')
//         break;
//     case 2:
//         console.log('dougras dougras')
//         break;
//     case 3:
//         console.log('dougras dougras dougras')
//         break;
//     case 4:
//         console.log('dougras dougras dougras dougras')
//         break;
//     case 5:
//         console.log('dougras dougras dougras dougras dougras')
//         break;
//     default:
//         console.log('vacilou dougras')
//         break;
// }


//LOOP DE REPETIÇÃO - PT.6 (for)
//é um loop com final determinado.

// var. controle ; regra parada ; regra para cada loop
// for (let indice = 0 ; indice <= 5 ; indice++) {
//     //saída
//     console.log( indice * indice);
// }

//faça tabuada do 7.

// for (let indice = 0; indice <= 10; indice++) {
//     console.log(indice * 7);
// }

//mostre todos os pares de 0 a 100
//Axioma: todo numero divisivel por 2 é PAR.
// % -> resto de uma divisão.

// for (let indice = 0; indice <= 100; indice++) {
//     if (indice % 2 == 1) {
//         console.log('par', indice)
//     }
// }

//fatorial
// var fatorial = 5;
// var resultado = 1;

// for(let indice = 1; indice <= fatorial ; indice++) {
//     resultado = resultado * indice;
//     console.log(resultado);
// }

// for(let indice = fatorial; indice >= 1 ; indice--) {
//     resultado = resultado * indice;
//     console.log(resultado);
// }


//LOOP DE REPETIÇÃO - PT.6 (while)
//loop não tem um fim determinado.


// var contador = 0;

// // enquanto
// while (contador != 0) {
//   console.log('ola while');
// }


//LOOP DE REPETIÇÃO - PT.7 (do while)
//loop não tem um fim determinado.
//executa ao menos 1 vez antes de rodar a regra.
//faça-enquanto
// do {
//   console.log('ola do do while!')
// } while (contador != 0)




// //declaração de prompt
// const umTexto = prompt("digite aqui seu texto!");
// const umNumero = +prompt("digite aqui seu numero!");


/*
  EXERCÍCIO 1: CLASSIFICADOR DE NÚMEROS (IF/ELSE)
  Instruções: Peça ao usuário para digitar um número (use a função 'prompt' se estiver no navegador).
  O código deve:
  1. Verificar se o número é maior que zero (Positivo).
  2. Verificar se o número é menor que zero (Negativo).
  3. Verificar se o número é igual a zero.
  4. Para números Positivos, verificar se são pares ou ímpares.
  5. Imprimir a classificação completa no console.
*/

// const meuNumero = +prompt('digite seu numero!')
// if (meuNumero > 0) {
//   console.log("o numero eh positivo!")
//   if (meuNumero % 2 == 0) {
//     console.log('o numero eh par!')
//   } else {
//     console.log('o numero eh impar!')
//   }
// }
// if (meuNumero < 0) {
//   console.log("o numero eh negativo!")
// }
// if (meuNumero == 0) {
//   console.log("o numero eh 0!")
// }


/*
  EXERCÍCIO 2: CONTADOR REGRESSIVO SIMPLES (WHILE)
  Instruções: Defina uma variável 'contador' com o valor 10.
  O código deve:
  1. Usar um loop 'while' para executar o código enquanto 'contador' for maior ou igual a 0.
  2. Imprimir o valor atual de 'contador' em cada iteração.
  3. Diminuir o valor de 'contador' em 1 a cada volta.
  4. Adicionar uma mensagem especial ("FOGO!") quando o contador chegar a 0.
*/
// var contador = 10;

// while(contador >= 0){
//   console.log(contador);
//   contador--;
//   if(contador == 0) {
//     console.log('FOGO!')
//   }
// };

/*
  EXERCÍCIO 3: JOGO DE ADIVINHAÇÃO (DO...WHILE)
  Instruções: Defina um 'numeroSecreto'. Simule os 'palpites' do usuário em uma variável.
  O código deve:
  1. Definir o 'numeroSecreto' (ex: 7) e um 'palpite' (ex: 0).
  2. Usar um loop 'do...while' que continue enquanto 'palpite' for diferente de 'numeroSecreto'.
  3. Dentro do loop, simular um novo palpite. (Para o exercício, o aluno pode alterar manualmente
     o valor de 'palpite' em cada teste, ou usar 'prompt' se for o caso).
  4. Usar 'if/else' dentro do loop para dar dicas ("Muito alto", "Muito baixo").
  5. Quando o loop terminar, imprimir uma mensagem de sucesso.
*/
//const numeroSecreto = 5;
//var palpite = +prompt("digite seu palpite!");

// do {
//   if (palpite < numeroSecreto) {
//     alert("numero muito baixo")
//   }
//   else if (palpite > numeroSecreto) {
//     alert("numero muito alto")
//   }

//   palpite = +prompt('voce errou, digite um novo palpite!');

//   if (palpite == numeroSecreto) {
//     alert('voce acertou! dougras!')
//   }
// } while (palpite != numeroSecreto);



/*
  EXERCÍCIO 4: TABUADA DE MULTIPLICAÇÃO (FOR)
  Instruções: Defina uma variável 'numeroTabuada' (ex: 5).
  O código deve:
  1. Usar um loop 'for' para iterar de 1 a 10.
  2. Dentro do loop, calcular o produto de 'numeroTabuada' pelo índice atual do loop (i).
  3. Imprimir o resultado no formato: "5 x 3 = 15".
*/

// const numeroTabuada = 5;

// for (let indice = 0 ; indice <= 10 ; indice++) {
//   console.log(numeroTabuada + ' X ' + indice + ' = ' + (indice * numeroTabuada))
// }

// //lista de numeros (vetor, array)
// const minhaLista = [1, 2, 3, 4, 5, 6];

// //pegando a posição 5 da lista.
// console.log(minhaLista[5])

// //somando valores com lista
// console.log(minhaLista[0], minhaLista[5])




// //lista com nomes
// const listaDeNomes = ['traviscott', 'virginia', 'anacastela', 'neymaru', 'viniJr'];
// //chamo a POSIÇÃO 2 da lista (lista inicia em 0)
// console.log(listaDeNomes[0])

// const frutas = ['maçã', 'maracujá', 'uva', 'pessego', 'morango', 'caja', 'banana'];
// console.log(frutas)
// tamanho da lista
//console.log('tamanho da lista ', frutas.length)

//remover o ultimo item da lista
// frutas.pop();
// console.log(frutas)

//adicionar item na lista
//frutas.push('tamarindo')
// var contador = 0;

// while(contador < frutas.length) {
//   console.log(frutas[contador])
//   contador++;
// }

//criação de funções
//esta e a forma inicial de criar função
//NÃO É A MELHOR PRÁTICA PARA FRONT-END!
// function nomeDaFuncao() {
//   console.log("a minha funcao em function!")
// }

//após criar uma função, ela não é executada automáticamente
//para executá-la precisa chamá-la, desta forma ela executara:
//o bloco de código da função.
//nomeDafuncao();

//arrow function, é a MELHOR PRÁTICA para criar funções em front-end
// const nomeDafuncComConst = () => {
//   console.log("minha func com const!")
// }

//após criar uma função, ela não é executada automáticamente
//para executá-la precisa chamá-la, desta forma ela executara:
//o bloco de código da função.
//nomeDafuncComConst();


// const somaDeDoisNumeros = (primeiroNumero, segundoNumero) => {
//   console.log(primeiroNumero + segundoNumero);
// }

// somaDeDoisNumeros(8, 2);
// somaDeDoisNumeros(30, 12);
// somaDeDoisNumeros(1325, 3450);


// --- Exercício 1: Módulo de Cálculo Geométrico ---
/**
 * ENUNCIADO: Crie uma função chamada calcularAreaPerimetro que aceite
 * TRÊS PARÂMETROS: tipo (string), valor1 (number) e valor2 (number).
 *
 * 1. Se o tipo for "retangulo", a função deve retornar um OBJETO contendo
 * a área (valor1 * valor2) e o perímetro (2 * (valor1 + valor2)).
 *
 * Exemplo de Retorno: { area: 32, perimetro: 24 }
 */



// --- Exercício 2: Validação de Credenciais (Booleano) ---
/**
 * ENUNCIADO: Implemente uma função chamada validarLogin que aceite
 * DOIS PARÂMETROS: usuario (string) e senha (string).
 *
 * 1. As credenciais válidas são: usuario = "admin" E senha = "12345".
 * 2. A função deve retornar um valor BOOLEANO (true ou false).
 * 3. A comparação de usuário deve ser case-insensitive (não diferenciar maiúsculas/minúsculas).
 *
 * Exemplo de uso: validarLogin("ADMIN", "12345") deve retornar true.
 * 
 */


// --- Exercício 3: Mapeamento de Status de Estoque (Valor Padrão) ---
/**
 * ENUNCIADO: Crie uma função chamada verificarEstoque que receba
 * DOIS PARÂMETROS: quantidade (number) e limiteBaixo (number).
 *
 * 1. A função deve retornar uma STRING com o status:
 * - "Estoque Suficiente" (se quantidade > limiteBaixo)
 *  
 * - "Atenção: Estoque Baixo" (se quantidade <= limiteBaixo)
 * 2. Implemente um VALOR PADRÃO para limiteBaixo, definindo-o como 10.
 *
 * Exemplo de uso: verificarEstoque(8) deve usar o limite padrão e retornar "Atenção: Estoque Baixo".
 */


// --- Exercício 4: Processamento de Lista de Dados (Array) ---
/**
 * ENUNCIADO: Desenvolva uma função chamada processarListaPrecos que receba
 * UM PARÂMETRO: um Array de números (precos).
 *-
 
 * 1. A função deve calcular e retornar a MÉDIA ARITMÉTICA de todos os elementos
 * contidos no array.
 * 2. Se o array estiver vazio, a função deve retornar 0.
 *
 * Fórmula: Média = Soma dos Preços / Total de Itens
 * Exemplo de uso: processarListaPrecos([10, 20, 30]) deve retornar 20.
 */
//  const listaDeLista = [[1, 2, 3], [3, 4, 8], [5, 6, 9]];
//  console.log(listaDeLista.length)

//  for(let contador = 0; contador < listaDeLista.length ; contador++) {
//   for(let segCont = 0; segCont < listaDeLista[contador].length ; segCont++) {

    
//     console.log(listaDeLista[contador][segCont])
//   }
//  }
const listaDepessoa = {
  nome: 'leonardo',
  idade: 18,
  apelido: 'leo',
  cpf: '000.111.222-34',
  rg: '12.123.456ex',

}
listaDepessoa.push({
  nome: 'bananaldo',
  idade: 17,
  apelido: 'bananananica',
  cpf: '500.140.630.80',
  rg:'12.523.234ex',
})
console.log(pessoa.cpf)
listaDepessoa.forEach((banana) => {
  if(banana.idade + 18) {
    console.log('ele e maior', banana)
  }else(
    console.log('ele e menor', banana)
  )
});

