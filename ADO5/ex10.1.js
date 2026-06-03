import prompt from 'prompt-sync';
let ler  = prompt();

console.log('\nPOGRAMA DO JOKENPÔ\n');

// ENTRADA
console.log('Escolha uma pedra, papel ou tesoura');
let escolha = ler();

let nMaquina = Math.floor(Math.random() * 3) + 1;

// PROCESSAMENTO
let resMaq = contaMaq(nMaquina);
let resTotal = jokenpo(escolha, resMaq);

// SAÍDA
console.log(`\nJoo-Keen-Poo
Jogador ${escolha} x ${resMaq} Máquina
${resTotal}`);

// ÁREA DAS FUNÇÕES
function contaMaq(nMaquina){
    let res = '';

    if (nMaquina == 1){
        res = 'Pedra'
    } else if (nMaquina == 2){
        res = 'Papel'
    } else if (nMaquina == 3){
        res = 'Tesoura'
    }

    return res;
}

function jokenpo(escolha, escolhaMaquina){
    if (escolha == 'pedra' && escolhaMaquina == 'Tesoura'){
        return '\nJogador venceu!'
    } else if (escolha == 'papel' && escolhaMaquina == 'Tesoura'){
        return '\nMáquina venceu!'
    } else if (escolha == 'tesoura' && escolhaMaquina == 'Tesoura'){
        return '\nEmpate!'
    } else if (escolha == 'pedra' && escolhaMaquina == 'Pedra'){
        return '\nEmpate!'
    } else if (escolha == 'papel' && escolhaMaquina == 'Pedra'){
        return '\nJogador venceu!'
    } else if (escolha == 'tesoura' && escolhaMaquina == 'Pedra'){
        return '\nMáquina venceu!'
    } else if (escolha == 'pedra' && escolhaMaquina == 'Papel'){
        return '\nMáquina venceu!'
    } else if (escolha == 'papel' && escolhaMaquina == 'Papel'){
        return '\nEmpate!'
    } else if (escolha == 'tesoura' && escolhaMaquina == 'Papel'){
        return '\nJogador venceu!'
    }
}