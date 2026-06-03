import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DO TRIPLO\n');

// ENTR

console.log('Insira um número');
let n1 = Number(ler());

// PROC

let a = triplo(n1);

// SAI

console.log(`\nO triplo de ${n1} é ${a}`);


// FUN

function triplo(a){
    let x = a * 3;
    return x;
};