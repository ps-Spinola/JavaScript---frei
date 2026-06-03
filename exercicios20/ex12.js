import prompt from 'prompt-sync'
let ler = prompt()

console.log('PROGRAMA DA PORCENTAGEM DO CUPOM DA COMPRA')
console.log()

console.log('Insira o preço da compra')
let pre = Number(ler())

console.log('Digite a porcentagem do desconto')
let por = Number(ler())

let fin = por

console.log('Compra finalizada! O total é de ' + (pre - fin))
