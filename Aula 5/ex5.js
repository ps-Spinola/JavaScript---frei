import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DOS PERSONAGENS DE FRIENDS');
console.log();

console.log('Qual é o personagem de Friends que trabalha com TI?');
let nom = ler();

let cor = nom == 'Chandler';

console.log('Resposta correta: ' + cor);