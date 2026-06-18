import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA KILOS PARA GRAMAS');
console.log();

console.log('Insira um valor em kilos');
let kil = Number(ler());

let gr = kil * 1000;

console.log(gr);