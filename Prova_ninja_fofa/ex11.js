import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DO VALOR DA COMPRA');
console.log();

console.log('Insira o valor da compra');
let comp = Number(ler());

console.log('Insira o valor do desconto');
let des = Number(ler());

let tot = comp - des;

console.log('Compra finalizada! O total é de ' + tot);

