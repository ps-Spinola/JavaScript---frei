import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRMA DO SEMÁFARO');
console.log();

console.log('Qual a cor do semáfaro?');
let sem = ler();

let atra = sem == 'Verde';

console.log('Pode atravessar? ' + atra);