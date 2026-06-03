import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DO TICKET\n');

console.log('Escolha entre inteira ou meia');
let int = ler();

console.log('\nEscolha quantos tickets');
let ticket = Number(ler());

let preç = 28.50;

if (int == 'inteira'){
    console.log('\nO total a pagar é de ' + preç * ticket)
}
else if (int == 'meia'){
    console.log('\nO total a pagar é de ' + (preç / 2) * ticket)
}
else {
    console.log('\nTente novamente.' + ' Opção inválida.')
}
