import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DA APROVAÇÃO');
console.log();

console.log('Insira a primeira nota');
let n1 = Number(ler());

console.log ('Insira a segunda nota');
let n2 = Number(ler());

console.log('Insira a terceira nota');
let n3 = Number(ler());

let med = (n1 + n2 + n3) / 3;
let pass = med >= 6;

console.log('A média do aluno é ' + med);
console.log('O aluno passou? ' + pass);
