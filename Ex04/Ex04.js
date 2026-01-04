/*Elabore um algoritmo para ler um valor monetário em reais (R$) e
convertê-lo para as moedas euro (€) e dólar americano (US$),
considerando as seguintes taxas de câmbio:
● Taxa de câmbio para euro: €1 = R$6,10
● Taxa de câmbio para dólar: $1 = R$5,70
Imprima na tela o valor em reais inserido pelo usuário e suas
conversões para dólar americano e euro.*/


let valorReal = Number(prompt("Digite um valor em reais para ser convertido: "));

let euro = valorReal / 6.1;
let dolar = valorReal / 5.7;

console.log(`R$${valorReal.toFixed(2)} é equivalente à €${euro.toFixed(2)} e a $${dolar.toFixed(2)}.`);


