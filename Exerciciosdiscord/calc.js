import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DA CALCULADORA\n');

console.log('Insira o primeiro número');
let n1 = Number(ler());

console.log('\nInsira o primeiro número');
let n2 = Number(ler());

console.log(`\nSelecione uma opção
    1. Somar
    2. Subtrair
    3. Multiplicar
    4. Dividir
    0. Sair
    `);
let opcao = Number(ler());

while (opcao != 0){
    
}