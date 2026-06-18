import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DA ÁREA DO TRINÂNGULO');
console.log();

console.log('Digite a altura do trinângulo');
let alt = Number(ler());

console.log('Digite a base do trinângulo');
let bas = Number(ler());

let area = (alt * bas) / 2;

console.log('A área do trinângulo é ' + area);