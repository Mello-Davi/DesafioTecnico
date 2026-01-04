/*Você está desenvolvendo um sistema para gerenciar jogadores de um
time de esportes. Cada jogador deve ter as seguintes propriedades:
● Nome (string)
● Idade (número)
● Posição (string)
● Pontuação (número)
Implemente as seguintes funcionalidades:.*/

/*1. Crie um array vazio chamado time para armazenar os jogadores
cadastrados.*/
let time = [];

/*2. Escreva uma função chamada adicionarJogador que:
○ Recebe como parâmetros os dados de um jogador (nome,
idade, posição e pontuação). Observação: esses dados
devem ser inseridos pelo usuário.
○ Cria um objeto representando o jogador e o adiciona ao
array time.*/
function adicionarJogador() {
    let nome = prompt("Digite o nome do jogador:");
    let idade = prompt("Digite a idade do jogador:");
    let posicao = prompt("Digite a posição do jogador:");
    let pontuacao = prompt("Digite a pontuação do jogador:");

    let jogador = {
        nome: nome,
        idade: idade,
        posicao: posicao,
        pontuacao: pontuacao
    };

    time.push(jogador);
    console.log("Jogador adicionado com sucesso!\n");
}

/*3. Escreva uma função chamada buscarPorPosicao que:
○ Recebe como parâmetro uma string representando a
posição. Observação: esse dado deve ser inserido pelo
usuário.

○ Retorna todos os jogadores dessa posição. Se não houver
jogadores, exiba uma mensagem apropriada.*/
function buscarPorPosicao() {
    let posicaoDesejada = prompt("Digite a posição a ser buscada:");
    let encontrados = [];

    for (let i = 0; i < time.length; i++) {
        if (time[i].posicao.toLowerCase() === posicaoDesejada.toLowerCase()) {
            encontrados.push(time[i]);
        }
    }

    if (encontrados.length === 0) {
        console.log(`Não há jogadores na posição: ${posicaoDesejada}`);
    } else {
        console.log(`Jogadores na posição ${posicaoDesejada}:`);
        for (let i = 0; i < encontrados.length; i++) {
            console.log(`- ${encontrados[i].nome}`);
        }
    }
}

/*4. Escreva uma função chamada listarTime que:
○ Imprime todos os jogadores cadastrados no time no
console, um por linha.*/
function listarTime() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
    } else {
        console.log("Lista de jogadores:");
        for (let i = 0; i < time.length; i++) {
            let jogador = time[i];
            console.log(`Nome: ${jogador.nome}, Idade: ${jogador.idade}, Posição: ${jogador.posicao}, Pontuação: ${jogador.pontuacao}`);
        }
    }
}

/*5. Escreva uma função chamada calcularPontuacaoMedia que:
○ Calcula e retorna a pontuação média de todos os jogadores
do time.*/
function calcularPontuacaoMedia() {
    if (time.length === 0) {
        console.log("Não há jogadores para calcular a média.");
        return;
    }

    let soma = 0;
    for (let i = 0; i < time.length; i++) {
        soma += Number(time[i].pontuacao);
    }

    let media = soma / time.length;
    console.log(`Pontuação média do time: ${media.toFixed(2)}`);
}

/*6. O programa deve iniciar exibindo o seguinte menu interativo, que
deve permitir ao usuário escolher uma das opções:
1 - Adicionar jogador
2 - Buscar por posição
3 - Listar time
4 - Calcular pontuação média
5 - Sair
O programa só deve ser encerrado ao escolher a opção 5. Caso
contrário, ele deve retornar ao menu interativo.*/
while (true) {
    let opcao = prompt(
        "Escolha uma opção:\n" +
        "1 - Adicionar jogador\n" +
        "2 - Buscar por posição\n" +
        "3 - Listar time\n" +
        "4 - Calcular pontuação média\n" +
        "5 - Sair"
    );

    if (opcao === "1") {
        adicionarJogador();
    } else if (opcao === "2") {
        buscarPorPosicao();
    } else if (opcao === "3") {
        listarTime();
    } else if (opcao === "4") {
        calcularPontuacaoMedia();
    } else if (opcao === "5") {
        console.log("Programa encerrado.");
        break;
    } else {
        console.log("Opção inválida. Tente novamente.");
    }
}