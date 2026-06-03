import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DO IMC');
console.log();

console.log('Insira sua altura');
let alt = Number(ler());

console.log('Insira seu peso');
let peso = Number(ler());

let imc = peso / alt **2;
let real = imc > 24.9;

console.log('Seu IMC é ' + imc);
console.log('Está acima do peso ideal? ' + real);