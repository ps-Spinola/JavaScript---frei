import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DO TRIPLO');
console.log();

console.log('Insira um número');
let n1 = Number(ler());

let tri = n1 * 3;

console.log('O triplo de ' + n1 + ' é ' + tri );