/*Escreva um programa para simular uma fila de espera em uma central
de atendimento ao cliente. O programa deve iniciar exibindo na tela um
menu interativo contendo a lista de todos os clientes esperando
atendimento, mostrando a posição ao lado do nome (ex.: 1o João, 2o
Maria, etc).
O menu deve permitir escolher entre as seguintes opções:
1 - “Novo Cliente”: Adiciona um novo cliente ao final da fila
(solicitando o nome do cliente).
2 - “Atender Cliente”: Retira o primeiro cliente da fila e exibe o
nome do cliente que está sendo atendido.
3 - “Sair”: Encerra o programa.
O programa só deve ser encerrado ao escolher a opção 3. Caso
contrário, ele deve retornar ao menu principal.*/

let listaDeClientes = ["João", "Maria"];

while (true) {
  // Exibe menu com posição e nome de cada cliente
  let menu = "Fila de Atendimento:\n";
  for (let i = 0; i < listaDeClientes.length; i++) {
    menu += `${i + 1}o ${listaDeClientes[i]}\n`;
  }
  menu += "\nEscolha uma opção:\n";
  menu += "1 - Novo Cliente\n";
  menu += "2 - Atender Cliente\n";
  menu += "3 - Sair";

  let opcao = prompt(menu);

  if (opcao === "1") {
    let novo = prompt("Digite o nome do novo cliente:");
    if (novo) {
      listaDeClientes.push(novo);
    }
  } else if (opcao === "2") {
    if (listaDeClientes.length > 0) {
      let atendido = listaDeClientes.shift();
      alert("Atendendo: " + atendido);
    } else {
      alert("A fila está vazia.");
    }
  } else if (opcao === "3") {
    alert("Encerrando programa.");
    break;
  } else {
    alert("Opção inválida. Tente novamente.");
  }
}