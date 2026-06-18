import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DO DOBRO');
console.log();

console.log('Insira um número');
let num = Number(ler());

let dob = num * 2;

console.log('O dobro de ' + num + ' é ' + dob);
