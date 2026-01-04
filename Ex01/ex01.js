// Exercício 1: Equação do 2º grau
/*Escreva um programa em que o usuário insira os coeficientes a, b e c
de uma equação quadrática da forma:
ax2 + bx + c = 0

O programa deve:
1. Calcular o discriminante (Δ) pela fórmula:
Δ = b2 − 4ac

2. Avaliar o valor de Δ para determinar o número de raízes reais:
○ Se Δ > 0, exibir as duas raízes reais e distintas.
○ Se Δ = 0, exibir uma raiz real (raiz dupla).
○ Se Δ < 0, informar que a equação não possui raízes reais.
3. Usar a fórmula de Bhaskara para calcular as raízes (caso existam)
e imprimir na tela tais raízes:
x1 = −b + Δ 2a x2 = −b − Δ 2a 
*/

// Coletando os dados do usuário e convertendo para número
let a = Number(prompt("Digite o coeficiente a: "));
let b = Number(prompt("Digite o coeficiente b: "));
let c = Number(prompt("Digite o coeficiente c: "));

let delta = Math.pow(b, 2) - (4 * a * c);

if (delta > 0) { 
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`A equação possui duas raízes reais e distintas:`);
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
} else if (delta === 0) { 
    let x = -b / (2 * a);
    console.log(`A equação possui uma raiz real (raiz dupla): x = ${x}`);
} else { 
    console.log("A equação não possui raízes reais, pois delta é menor que zero.");
}