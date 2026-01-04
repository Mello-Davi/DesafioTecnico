/*Elabore um algoritmo que peça para o usuário inserir um número
inteiro e realize o seguinte:
● Caso o valor seja divisível por 3, imprima “fizz”.
● Caso o valor seja divisível por 5 imprima “buzz”.
● Caso o valor seja divisível por 3 e 5, ao mesmo tempo, imprima
“fizzbuzz”.
● Caso contrário imprima nada. */

let inteiro = Number(prompt("Digite um número inteiro: "));

if (inteiro % 3 === 0 && inteiro % 5 === 0 ){
    console.log("fizzbuzz");
} else if ( inteiro % 3 === 0){ 
    console.log("fizz");
} else if (inteiro % 5 === 0){
    console.log("buzz");
}