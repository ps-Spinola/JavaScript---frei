import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DA SOMA\n');

console.log('Informe o primeiro número')
let n1 = Number(ler());

console.log('\nInforme o segundo número')
let n2 = Number(ler());

let s = soma(n1,n2)

console.log(`A soma de ${n1} + ${n2} é ${s}`);

// ÁREA A FUNÇÃO

function soma(a, b){
    let res = a + b;
    return res;
};