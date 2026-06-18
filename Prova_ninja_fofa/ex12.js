import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DO PROGRAMA DO DESCONTO COM PORCENTAGEM');
console.log();

console.log('Insira o valor da compra');
let val = Number(ler());

console.log('Insira o valor de desconto');
let des = Number(ler());

let por = val * (des/100);
let fin = val - por;

console.log('Compra finalizada! O total é de ' + fin);