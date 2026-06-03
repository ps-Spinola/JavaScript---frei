import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DO JOO-KENN-POO\n');

let escolha = Number(ler());

let maquina = Math.floor(Math.random() * 3) + 1;
let resultado = jogo(escolha, maquina);

console.log(`Joo-kenn-poo!\n\nJogador ${escolha} x ${maquina} Máquina\n\n${resultado}\n${resultado}`);

// área da função

function jogo(jogador, maquina) {
    if (jogador == maquina) {
        return 'Empate!';
    } else if ((jogador == 1 && maquina == 3) || (jogador == 2 && maquina == 1) || (jogador == 3 && maquina == 2)) {
        return 'Jogador Venceu!';
    } else {
        return 'Máquina Venceu!';
    }
}