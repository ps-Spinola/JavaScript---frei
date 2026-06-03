import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DO NÚMERO PAR');
console.log();

console.log('Insira um número');
let n1 = Number(ler());

let par = n1 % 2;
let imp = par == 0;

console.log('Número é par? ' + imp);