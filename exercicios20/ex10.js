import prompt from 'prompt-sync'
let ler = prompt()

console.log('PROGRAMA MÉDIA DE CINCO NOTAS')
console.log()

console.log('Digite a primeira nota')
let n1 = Number(ler())

console.log('Digite a segunda nota')
let n2 = Number(ler())

console.log('Digite a terceira nota')
let n3 = Number(ler())

console.log('Digite a quarta nota')
let n4 = Number(ler())

console.log('Digite a quinta nota')
let n5 = Number(ler())

let md5 = (n1 + n2 + n3 + n4 + n5) / 5

console.log('A média é ' + md5)