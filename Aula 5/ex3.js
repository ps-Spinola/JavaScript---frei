import prompt from "prompt-sync";
let ler = prompt();

console.log('PROGRAMA DA ÁREA DOS RETÂNGULOS');
console.log();

console.log('Insira a base do retângulo');
let bas1 = Number(ler());

console.log('Agora, insira a altura do retângulo');
let alt1 = Number(ler());

console.log('Insira a base do segundo retângulo');
let bas2 = Number(ler());

console.log('Agora, insira a altura do segundo triângulo');
let alt2 = Number(ler());

let med1 = bas1 * alt1;
let med2 = bas2 * alt2;
let comp = med1 == med2;

console.log('O primeiro retângulo possui área ' + med1);
console.log('O segundo retângulo possui área ' + med2);
console.log('Eles são iguais? ' + comp);