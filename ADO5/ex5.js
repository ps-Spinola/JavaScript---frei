import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DO CANDIDATO\n');

console.log('Insira a nota do candidato:');
let nota = Number(ler());

console.log('\nInsira a nota de corte:');
let corte = Number(ler());

console.log('\nInsira a nota mínima de aprovação:');
let aprov = Number(ler());

let x = media(nota, corte, aprov);

console.log(`\n${x}`);

// área da função

function media(n1, n2, n3) {
    let y = n1;
    if (y <= n2 ) {
        return 'Candidato não passou';
    } else if (y >= n3) {
        return 'Candidato aprovado';
    } else if (y > n2 && y < n3) {
        return 'Candidato extá na lista de espera';
    }
}