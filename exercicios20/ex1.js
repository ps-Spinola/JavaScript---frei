import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA SOMA DE DOIS NÚMEROS');
console.log();

console.log('Insira um número');
let n1 = Number(ler())

console.log('Insira mais um número');
let n2 = Number(ler());

let soma = n1 + n2

console.log('A soma de ' + n1 + ' + ' + n2 + ' é igual a ' + soma)