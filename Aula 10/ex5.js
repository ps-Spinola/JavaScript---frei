import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DOS NÚMEROS NATURAIS E PARES\n');

console.log('Insira o primeiro número');
let n1 = Number(ler());

console.log('Insira osegundo número');
let n2 = Number(ler());

let cont = '';

if(n1 % 2 == 0){
    cont = n1
}
else if(n1 % 2 == 1){
    cont = n1 - 1
}

for (cont; cont <= n2; cont++){
    console.log(cont)
}
