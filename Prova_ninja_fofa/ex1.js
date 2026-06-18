import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DA SOMA');
console.log() ;

console.log('Insira o primeiro número');
let n1 = Number(ler());

console.log('Insira o segundo número');
let n2 = Number(ler());

let soma = n1 + n2;

console.log('A soma de ' + n1 + ' + ' + n2 + ' é ' + soma );