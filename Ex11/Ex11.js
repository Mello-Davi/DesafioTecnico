/*Escreva um programa que receba uma lista de números inteiros e
armazene-os em um array. O programa deve verificar quantos números
do vetor estão em ordem crescente em relação ao número anterior e
exibir essa informação. */

//1. Solicite ao usuário a quantidade de números que ele deseja
//inserir no vetor e, em seguida, peça que insira cada número.
let quantidade = prompt("Digite a quantidade de valores a serem colocados no vertor: ");
let lista = [];
for (let i= 0; i < quantidade; i++){
    lista[i] = parseInt(prompt(`lista[${i+1}] = `));
}

//2. Verifique cada par consecutivo de números no vetor e identifique
//se estão em ordem crescente (ou seja, se o próximo número é
//maior que o anterior).
let contadorDeOrdensCrescentes = 0;
for (let i = 0; i < quantidade-1; i++ ){
    if (lista[i] < lista[i+1]){
        contadorDeOrdensCrescentes++;
    }
}

//3. Imprima quantos números estão em ordem crescente em relação ao número anterior.
console.log(`Tem ${contadorDeOrdensCrescentes} números que estão em ordem crescente em relação ao número anterior.`);