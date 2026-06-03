import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DA FEBRE');
console.log();

console.log('Diga sua temperatura e eu direi se está com febre');
let temp = Number(ler());

let febre = temp >= 37.3;

console.log('Você está com febre? ' + febre);
