import prompt from 'prompt-sync';
let ler  = prompt();

console.log('\nPROGRAAMA NATURAIS\n');

// ENTRADA
console.log('Insira um número natural');
let num = ler();

// PROCESSAMENTO
contagem(num);

// SAÍDA





// ÁREA DAS FUNÇÕES

function contagem(n){
    for(let x = 1; x <= n; x++){
        console.log(x);
    }
}
