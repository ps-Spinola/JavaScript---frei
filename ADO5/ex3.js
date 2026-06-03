import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DA CLASSIFICAÇÃO DO ALUNO\n');

console.log('Informe a primeira nota do aluno:');
let nota1 = Number(ler());

console.log('\nInforme a segunda nota do aluno:');
let nota2 = Number(ler());

console.log('\nInforme a terceira nota do aluno:');
let nota3 = Number(ler());

console.log('\nInforme a quantidade de faltas do aluno:');
let faltas = Number(ler());

let x = classificacaoAluno(nota1, nota2, nota3, faltas);

console.log(`\nSituação do aluno: ${x}`);

// área da função

function classificacaoAluno(nota1, nota2, nota3, faltas) {
    let media = (nota1 + nota2 + nota3) / 3;
    if (faltas > 30) {
        return 'Reprovado';
    }
    else if (media >= 8) {
        return 'Aprovado com Sucesso';
    }
    else if (media >= 6 && media < 8) {
        return 'Aprovado';
    }
    else if (media >= 3 && media < 6) {
        return 'Recuperação';
    }
    else if (media < 3) {
        return 'Reprovado';
    }
    else if (media == 0) {
        return 'Desistente';
    }
}