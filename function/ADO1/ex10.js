import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DA MÉDIA\n');

console.log('Insira a primeira nota');
let n1 = Number(ler());

console.log('\nInsira a segunda nota');
let n2 = Number(ler());

console.log('\nInsira a terceira nota');
let n3 = Number(ler());

console.log('\nInsira a quarta nota');
let n4 = Number(ler());

console.log('\nInsira a quinta nota');
let n5 = Number(ler());

let x = med(n1, n2, n3, n4, n5)

console.log(`\nA média é ${x}`);

// área da função

function med(nota1, nota2, nota3, nota4, nota5){
    let y = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    return y;
}