import prompt from 'prompt-sync'
let ler = prompt();

console.log('\nPROGRAMA DO BONDINHO\n');
console.log('Insira a quantidade de ALUNOS');
let A = Number(ler());

console.log('\nInsira a quantidade de MONITORES');
let M = Number(ler());

let AM = A + M;
let bon = '';

if(AM <= 50){
    bon = 'S';
}
else{
    bon = 'N';
}

console.log(`\n${bon}`);
