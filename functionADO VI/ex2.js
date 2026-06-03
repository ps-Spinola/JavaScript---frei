import prompt from 'prompt-sync';
let ler  = prompt();

console.log('\nPROGRAMA DA REGRESSÃO\n');

// ENTRADA
console.log('Insira um número');
let num = Number(ler());

// PROCESSAMENTO
contagem(num)

// SAÍDA
console.log(`\n`);

// ÁREA DAS FUNÇÕES
function contagem(n){
    for(let cont = n; cont != 0; n--){
        console.log(n)
    }
}
