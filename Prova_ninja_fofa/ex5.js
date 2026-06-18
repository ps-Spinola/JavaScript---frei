import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DA ÁREA DO QUADRADO');
console.log();

console.log('insira um número');
let g = Number(ler());

let h = g * g;
console.log('A área do quadrado é ' + h);