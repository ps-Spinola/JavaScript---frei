import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DA CONTAGEM REGRESSIVA\n');

console.log('Informe um número');
let n1 = Number(ler());

for (let cont = 1; n1 >= cont; n1--){
    console.log(n1)
}
