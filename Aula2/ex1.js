import prompt from 'prompt-sync'
let ler = prompt();
let anos = prompt();

console.log('Olá! Seja bem vindo(a)!');

console.log('Qual seu nome?');
let nome = ler();

console.log('Prazer em te conhecer ' +  nome + '!'); 
console.log('Quantos anos você tem?');
let idade = anos();

console.log('Prazer ' + nome + ' ,então você tem ' + idade + ' anos');

