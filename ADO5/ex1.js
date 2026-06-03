import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DO TIPO DO TRIÂNGULO\n');

console.log('Informe o primeiro lado do triângulo:');
let lado1 = Number(ler());

console.log('\nInforme o segundo lado do triângulo:');
let lado2 = Number(ler());

console.log('\nInforme o terceiro lado do triângulo:');
let lado3 = Number(ler());

let x = tipoTriangulo(lado1, lado2, lado3);

console.log(`\nEsse é um triângulo ${x}`);

// área da função

function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'equilátero';
    }
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        return 'isósceles';
    }
    else {
        return 'escaleno';
    }
}