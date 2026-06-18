import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DA CONTAGEM');

console.log('Informe um número');
let num = Number(ler());

let contador = 1
while (contador <= num) {
    console.log(contador)

    contador ++
};