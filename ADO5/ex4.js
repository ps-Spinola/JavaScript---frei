import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DA CALCULADORA\n');

console.log('Digite o primeiro número:');
let num1 = Number(ler());

console.log('\nDigite o segundo número:');
let num2 = Number(ler());

console.log('\nDigite a operação (Soma, Subtração, Multiplicação, Divisão, Resto da Divisão e Potência):');
let operacao = ler();

let x = calculo(num1, num2, operacao);

console.log(`\n${x}`);

// área da função

function calculo(num1, num2, operacao) {
    let resultado;
    if (operacao == 'Soma' || operacao == 'soma') {
        resultado = `Resultado é ${num1 + num2}`;
    } else if (operacao == 'Subtração' || operacao == 'subtração' || operacao == 'Subtracao' || operacao == 'subtracao') {
        resultado = `Resultado é ${num1 - num2}`;
    } else if (operacao == 'Multiplicação' || operacao == 'multiplicação' || operacao == 'Multiplicacao' || operacao == 'multiplicacao') {
        resultado = `Resultado é ${num1 * num2}`;
    } else if (operacao == 'Divisão' || operacao == 'divisão' || operacao == 'divisao' || operacao == 'Divisao') {
        resultado = `Resultado é ${num1 / num2}`;
    } else if (operacao == 'Resto da Divisão' || operacao == 'resto da divisão' || operacao == 'resto da divisao' || operacao == 'Resto da Divisao') {
        resultado = `Resultado é ${num1 % num2}`;
    } else if (operacao == 'Potência' || operacao == 'potência' || operacao == 'potencia' || operacao == 'Potencia') {
        resultado = `Resultado é ${num1 ** num2}`;
    } else {
        resultado = 'Operação não suportada';
    }
    return resultado;
}