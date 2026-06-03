import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DOS NÚMEROS NATURAIS\n');

console.log('Informe o primeiro número');
let n1 = Number(ler());

console.log('\nInforme o segundo número');
let n2 = Number(ler());

for(let cont = n1; cont <= n2; cont++){
    console.log(cont)
}