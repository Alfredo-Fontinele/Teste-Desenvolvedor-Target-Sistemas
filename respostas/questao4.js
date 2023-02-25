// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de
// representação que cada estado teve dentro do valor total mensal da distribuidora.

const STATES = [
    {
        city: "SP",
        value: 67836.43,
    },
    {
        city: "RJ",
        value: 36678.66,
    },
    {
        city: "MG",
        value: 29229.88,
    },
    {
        city: "ES",
        value: 27165.48,
    },
    {
        city: "outros",
        value: 19849.53,
    },
];

const totalValue = (states) => {
    let total = 0;
    states.forEach((state) => {
        total += state.value;
    });
    return total;
};

const percentual = (states) => {
    const totalAcumulado = totalValue(states);
    const result = [];
    states.forEach((state) => {
        const name = state.city;
        const value = state.value;
        const percent = `${((value * 100) / totalAcumulado).toFixed(2)}%`;
        result.push({
            name,
            value,
            percent,
        });
    });
    return {
        totalAcumulado,
        result,
    };
};

console.log(percentual(STATES));
