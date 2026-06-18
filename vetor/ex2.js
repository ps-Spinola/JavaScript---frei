import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DOS NOMES');

let armazem = [];
let nome = '';

for(let n = 0; n < 5; n++){
    console.log('\nInsira um nome');
    nome = ler();

    armazem.push(nome);
}

console.log('\nVocê digitou os nomes:');
for(let item of armazem){
    console.log(item);
}