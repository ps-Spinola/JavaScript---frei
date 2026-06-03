import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DA ÁREA DO RETÂNGULO\n')

console.log('Insira a altura do retângulo');
let H = Number(ler());

console.log('\nInsira a base do retângulo');
let B = Number(ler());

let x = área(H, B)

console.log(`\nA área do retângulo (${H} por ${B}) é ${x}`);

// área da função

function área(altura, base){
    let y = altura * base;
    return y;
}