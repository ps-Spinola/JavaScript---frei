import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DO ARMAZEM DE NÚMEROS');

let armazem = [];
let n = 0;

for(let num = 0; num < 5; num++){
    console.log('\nInsira um número inteiro');
    n = Number(ler());
    
    armazem.push(n)
}

console.log('\nVocê digitou os números:')
for(let item of armazem){
    console.log(item);
}