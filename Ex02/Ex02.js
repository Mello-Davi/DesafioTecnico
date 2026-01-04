// Exercício 2 

// 2. Pergunte ao usuário se ele quer calcular o fatorial de outro
// número. Se o usuário digitar "S" ou “s”, o programa deve reiniciar e
// permitir outro cálculo; se digitar "N" ou “n”, o programa deve
// encerrar.

let continuar = "S";

while (continuar === "S" || continuar === "s") {

    // 1. Solicite ao usuário um número inteiro positivo e calcule o seu fatorial.
    let numero = Number(prompt("Digite um número inteiro positivo para calcular o fatorial:"));

    // 3. Valide a entrada do usuário para garantir que apenas números inteiros positivos são aceitos.
    // Se o usuário digitar um número inválido, exiba uma mensagem de erro e peça a entrada novamente.
    while (numero < 0 || numero % 1 !== 0 || isNaN(numero)) {
        numero = Number(prompt("Erro! Digite um número inteiro positivo:"));
    }

    // Cálculo do fatorial
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é ${fatorial}.`);

    // 2. Pergunte novamente ao final do cálculo
    continuar = prompt("Deseja calcular outro fatorial? (S/N)");
}