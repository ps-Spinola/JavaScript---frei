import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DA COR\n');

console.log('Informe a primeira cor:');
let cor1 = ler();

console.log('\nInforme a segunda cor:');
let cor2 = ler();

let x = cor(cor1, cor2);

console.log(`\nA combinação das cores é: ${x}`);

// área da função

function cor(cor1, cor2) {
    if (cor1 == 'vermelho' && cor2 == 'azul' || cor1 == 'azul' && cor2 == 'vermelho' || cor1 == 'Vermelho' && cor2 == 'Azul' || cor1 == 'Azul' && cor2 == 'Vermelho') {
        return 'Roxo';
    }
    else if (cor1 == 'vermelho' && cor2 == 'amarelo' || cor1 == 'amarelo' && cor2 == 'vermelho' || cor1 == 'Vermelho' && cor2 == 'Amarelo' || cor1 == 'Amarelo' && cor2 == 'Vermelho') {
        return 'Laranja';
    }
    else if (cor1 == 'azul' && cor2 == 'amarelo' || cor1 == 'amarelo' && cor2 == 'azul' || cor1 == 'Azul' && cor2 == 'Amarelo' || cor1 == 'Amarelo' && cor2 == 'Azul') {
        return 'Verde';
    }
    else {
        return 'Apenas cores primárias são aceitas';
    }
}