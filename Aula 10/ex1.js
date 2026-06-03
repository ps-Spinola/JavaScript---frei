import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DA CONTAGEM\n');

console.log('Informe um número');
let n1 = Number(ler());

for (let cont = 1; cont <= n1; cont++){
    console.log(cont)
}
