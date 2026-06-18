import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DA METADE');
console.log();

console.log('Insira um número');
let n1 = Number(ler());

let met = n1 / 2;

console.log('A metade de ' + n1 + ' é ' + met);
