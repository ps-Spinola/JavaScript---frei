import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DA MÉDIA');
console.log()

console.log('Insira a primeira nota');
let note1 = Number(ler());

console.log('Insira a segunda nota');
let note2 = Number(ler());

console.log('Insira a terceira nota');
let note3 = Number(ler());

console.log('insira a quarta nota');
let note4 = Number(ler());

console.log('Insira a quinta nota');
let note5 = Number(ler());

let media = (note1 + note2 + note3 + note4 + note5) / 5;
console.log('A média é ' + media); 