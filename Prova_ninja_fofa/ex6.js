import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DA ÁREA DO RETÂNGULO');
console.log();

console.log('Digite a altura do retângulo');
let a = Number(ler());

console.log('Agora digite a base do retângulo');
let b = Number(ler());

let area = a * b;

console.log('A área do retângulo (' + a + ' por ' + b + ') é ' + area);