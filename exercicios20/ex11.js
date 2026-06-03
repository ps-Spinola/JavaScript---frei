import prompt from 'prompt-sync'
let ler = prompt()

console.log('PROGRAMA DO CUPOM DE DESCONTO')
console.log()

console.log('Insira o valor da compra')
let comp = Number(ler())

console.log ('Digite o valor do desconto')
let des = Number(ler())

let fim = comp - des

console.log ('Compra finalizada! O total é de R$ ' + fim)
