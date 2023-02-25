// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const findFibonacci = (value) => {
    if (typeof value !== "number") {
        throw new Error("Value must be a number");
    }
    let valuesFibonacci = [];
    valuesFibonacci[0] = 0;
    valuesFibonacci[1] = 1;
    for (let i = 2; i < value; i++) {
        valuesFibonacci[i] = valuesFibonacci[i - 2] + valuesFibonacci[i - 1];
    }
    const existvalue = valuesFibonacci.find((number) => number === value);
    if (existvalue) {
        return "O número pertence à sequência";
    }
    return "O número não pertence à sequência";
};

const f1 = findFibonacci(13);
const f2 = findFibonacci(14);

console.log(f1);
console.log(f2);
