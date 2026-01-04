/*Crie uma função chamada verificarIdades que recebe um array de
anos de nascimento de várias pessoas. A função deve calcular a idade
de cada pessoa com base no ano atual (inserido pelo usuário) e, para
cada idade, determinar se a pessoa é maior de idade (18 anos ou mais)
ou menor de idade (menos de 18 anos). A função deve retornar um array
contendo "maior" para pessoas maiores de idade e "menor" para
pessoas menores de idade, mantendo a ordem das idades verificadas.
Após isso, a função deve imprimir na tela uma mensagem para cada
pessoa, no formato:

Pessoa 1: Maior de idade
Pessoa 2: Menor de idade
        (...)
*/

function verificarIdades(arrayAnosNascimento, anoAtual) {
    let resultados = [];
    
    for (let i = 0; i < arrayAnosNascimento.length; i++) {
      let idade = anoAtual - arrayAnosNascimento[i];
    
      if (idade >= 18) {
        resultados.push("maior");
        console.log(`Pessoa ${i + 1}: Maior de idade`);
      } else {
        resultados.push("menor");
        console.log(`Pessoa ${i + 1}: Menor de idade`);
      }
    }
    
    return resultados;
  }
