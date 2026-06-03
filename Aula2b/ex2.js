import prompt from 'prompt-sync'
let ler = prompt();

console.log('Olá! Seja bem-vindo!');

console.log('Qual o seu nome?');
let nome = ler();

console.log('Prazer em conhecer você ' + nome + '!');

