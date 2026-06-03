import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DO DOBRO\n');

console.log('Insira um número');
let n1 = Number(ler());

let a = dobro(n1);

console.log(`\nO dobro de ${n1} é ${a}`);


// ÁREA DA FUNÇÃO

function dobro(num1){
    let x = num1 * 2;
    return x;
}