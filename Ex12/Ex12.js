/*Implemente uma função chamada encontrarElementoUnico que recebe
um array de números inteiros onde cada elemento aparece exatamente
duas vezes, exceto por um elemento que aparece exatamente uma vez.
A função deve retornar o elemento que aparece apenas uma vez. Tal
elemento deve ser impresso na tela.*/

function encontrarElementoUnico(array) {
    for (let i = 0; i < array.length; i++) {
      let contadorDeAparicoes = 0;
      
      for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          contadorDeAparicoes++;
        }
      }
      if (contadorDeAparicoes === 1) {
        return array[i];
      }
    }
    return undefined;
  }
  
  let numerosInteiros = [2, 3, 5, 4, 5, 3, 4];
  let unico = encontrarElementoUnico(numerosInteiros);
  console.log(`Elemento único: ${unico}`);