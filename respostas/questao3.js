// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora,
// faça um programa, na linguagem que desejar, que calcule e retorne:

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const DB = require("../db").DB;

// • O menor valor de faturamento ocorrido em um dia do mês;

const menorFaturamento = (db) => {
    const newDb = db.filter((item) => item.valor > 0);
    let menor = newDb[0];
    let dia = newDb[0];
    newDb.forEach((item) => {
        if (item.valor.toFixed(2) < menor) {
            dia = item.dia;
            menor = item.valor;
        }
    });
    return { dia, menor_faturamento: menor };
};

console.log(menorFaturamento(DB));

// • O maior valor de faturamento ocorrido em um dia do mês;

const maiorFaturamento = (db) => {
    let dia = 0;
    let valorResult = 0;
    db.forEach((item) => {
        if (item.valor > valorResult) {
            dia = item.dia;
            valorResult = item.valor;
        }
    });
    return { dia, maior_faturamento: valorResult };
};

console.log(maiorFaturamento(DB));

// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const media = (db) => {
    let sum = 0;
    let qtd = 0;
    db.forEach((item) => {
        const dia = item.dia;
        const valor = item.valor;
        if (valor) {
            sum += valor;
            qtd++;
        }
    });

    return sum / qtd;
};

const quatidadeDias = (db) => {
    const mediaTotal = media(db);
    let numeroDias = 0;
    let diasArr = [];
    db.forEach((item) => {
        const dia = item.dia;
        const valor = item.valor;
        if (valor > mediaTotal) {
            diasArr.push(dia);
            numeroDias++;
        }
    });
    return `Media: ${mediaTotal}\nQuantidade de dias: ${numeroDias}\nDias em que o valor de faturamento diário foi superior à média: [${diasArr}]`;
};

console.log(quatidadeDias(DB));
