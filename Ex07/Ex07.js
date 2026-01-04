/*Escreva um programa que verifique se uma frase é um palíndromo. Um
palíndromo é uma sequência que pode ser lida da mesma maneira da
esquerda para a direita e da direita para a esquerda.
Requisitos:
Dica: Use toLowerCase() e split().*/

//1. Solicite ao usuário uma frase.
let frase = prompt("Digite uma frase para verificar se é um palíndromo:");

//2. Remova todos os espaços e ignore a diferença entre letras maiúsculas e minúsculas.
let arr = frase.toLowerCase().split(/\s+/);
let str = "";
for (let i = 0; i < arr.length; i++) {
  str += arr[i];
}

//3. Verifique se a frase é igual quando lida ao contrário e informe se ela é um palíndromo ou não.
let palindromo = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    palindromo = false;
    break;
  }
}

if (palindromo) {
  console.log("É um palíndromo! ");
} else {
  console.log("Não é um palíndromo.");
}