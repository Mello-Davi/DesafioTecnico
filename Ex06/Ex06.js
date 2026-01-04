/*Escreva um programa que:
1. Solicite ao usuário um número inteiro positivo n, que representa o
número de termos que ele deseja ver da sequência de Fibonacci.
2. Implemente uma função recursiva chamada fibonacci que recebe
um número n e retorna os n primeiros termos da sequência de
Fibonacci, onde:
○ Fibonacci(0) = 0

○ Fibonacci(1) = 1
○ Para n>1: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
3. Exiba os n primeiros termos da sequência de Fibonacci.*/

// 2. Função recursiva que retorna os primeiros n termos da sequência de Fibonacci
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    const sequencia = fibonacci(n - 1);
    sequencia.push(sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]);
    return sequencia;
  }
  
  // 1. Solicita ao usuário um número inteiro positivo
  let entrada = prompt("Digite um número inteiro positivo:");
  let numero = Number(entrada);
  
  // 3. Verificação usando % ou | para confirmar se é inteiro
  if (numero > 0 && numero % 1 === 0) {
    const resultado = fibonacci(numero);
    for (let i = 0; i < resultado.length; i++) {
      console.log(resultado[i]);
    }
  } else {
    console.log("Por favor, insira um número inteiro positivo.");
  }