import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DO FAROL\n');

console.log('Qual a cor do farol?\n');
let cor = ler();

if (cor == 'verde'){
    console.log('\nAtravesse')
}

else if (cor == 'vermelho'){
    console.log('\nEspere')
}

else {
    console.log('\nFarol Inoperante')
}