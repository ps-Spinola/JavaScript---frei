import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROMGRAMA DA MÉDIA');
console.log();

console.log('Insira a primeira nota');
let note1 = Number(ler());

console.log('Insira a segunda nota');
let note2 = Number(ler());

console.log('Insira a terceira nota');
let note3 = Number(ler());

let media = (note1 + note2 + note3) / 3;
console .log('A média é ' + media);