import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DA ÁREA DO QUADRADRO\n');

console.log('Insira um lado do quadrado');
let l1 = Number(ler());

let x = área(l1);

console.log(`\nA área do quadrado é ${x}`);


// área da função

function área(lado){
    let y = lado * lado;
    return y;
}