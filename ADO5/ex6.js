import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nPROGRAMA DA MENSALIDADE\n');

console.log('Insira a abreviação do seu curso (SI, ADS, CS, EC):');
let curso = ler();

console.log('\nVocê é isento de mensalidade? (true/false):');
let mensali = ler();

console.log('\nInsira a sua porcentagem de desconto:');
let desconto = Number(ler());

let x = mensalidade(curso, mensali, desconto);

console.log(`\n${x}`);

// área das funções

function mensalidade(curso, mensalidade, desconto) {
    let y = 0;
    desconto = desconto / 100;
    if (mensalidade == 'true' || mensalidade == 'True' || mensalidade == 'TRUE') {
        return 0.00;
    } else if (curso == 'SI' || curso == 'si') {
        y = 550.00 - (550.00 * desconto);
        return y;
    } else if (curso == 'ADS' || curso == 'ads') {
        y = 750.00 - (750.00 * desconto);
        return y;
    } else if (curso == 'CS' || curso == 'cs') {
        y = 1500.00 - (1500.00 * desconto);
        return y;
    } else if (curso == 'EC' || curso == 'ec') {
        y = 1200.00 - (1200.00 * desconto);
        return y;
    }
}