import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DA METADE\n');

// E

console.log('Insira um número');
let n1 = Number(ler());

// P

let a = metade(n1);

// S

console.log(`\n A metade de ${n1} é ${a}`);

// F

function metade(a){
    let x = a / 2;
    return x;
};